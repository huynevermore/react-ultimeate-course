import React from 'react'

/*
- can reference DOM element in jsx
- store value that don't reset when component re-render
  - number, string, object, array, function, react component...
*/
// let countRef = 0;

const Modal = React.forwardRef((props, ref: any) => {
  const [isShowModal, setIsShowModal] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      showModal() {
        setIsShowModal(true)
      },
      closeModal() {
        setIsShowModal(false)
      }
    } 
  })

  function onShowModal() {
    setIsShowModal(prevState => !prevState)
  }

  return (
    <>
      <div
        id="popup-modal"
        // ref={ref}
        tabIndex={-1}
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        style={{ display: isShowModal ? 'block' : 'none'}}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={onShowModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only"  onClick={onShowModal}>Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  console.log('onShowModal: ')
                  onShowModal();
                }}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

function RefHook() {
  const [, setForceUpdate] = React.useState(Date.now());
  const buttonRef = React.useRef<any>(null);
  const countRef = React.useRef(0);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const isSkipFirstRender = React.useRef(true);
  const modalRef = React.useRef<any>(null);
  
  React.useEffect(() => {
    if (isSkipFirstRender.current) {
      isSkipFirstRender.current = false;
      return;
    }

    async function fetchNotification() {
      console.log('fetchNotification')
    }
    fetchNotification();
  });

  function testButtonRef() {
    buttonRef.current.style.backgroundColor = '#f00';
    countRef.current = countRef.current + 1;
    // countRef = countRef + 1; // 1

    inputRef.current?.focus();
    inputRef.current?.select();

    setForceUpdate(Date.now());
  }

  function showModal() {
    // modalRef.current.style.display = 'block'

    console.log('showModal: ', modalRef.current)
    modalRef.current.showModal();
  }

  console.log("REF HOOK=============")

  return (
    <div>
      <h1>RefHook</h1>
      Count Ref: {countRef.current} <br />
      <input type="text" ref={inputRef} />
      <button type="button" ref={buttonRef} onClick={testButtonRef}>update bacgkround color</button>
    
      <h3>Demo skip run useEffect first render</h3>

      <h3>forwardRef</h3>
      <button type="button" onClick={showModal}>Show Modal</button>
      <Modal 
        ref={modalRef}
      />
    </div>
  )
}

export default RefHook