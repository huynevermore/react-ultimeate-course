import React from 'react'

// click update profile -> call api -> return infor user -> use to render input to show UI
const user: any = undefined;

function Form() {
    const firstNameRef = React.useRef<HTMLInputElement | null>(null);
    const [lastName, setLastName] = React.useState<string | undefined>(user?.lastName || '');
    const [form, setForm] = React.useState({
        email: '',
        age: null
    });

    function onChangeForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function onSubmit(e: any) {
        e.preventDefault();
        // const firstName = document.getElementById('firstName') as HTMLInputElement;
        console.log("onSubmit:", {
            firstName: firstNameRef?.current?.value,
            lastName,
            form
        })
    }

    return (
        <div>
            <h1>Form</h1>

            <form onSubmit={onSubmit}>
                <br />
                First Name: <input ref={firstNameRef} defaultValue="tony" id="firstName" type="text" /> <br />
                Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />

                Email <input name="email" type="text" onChange={onChangeForm} /><br />
                Age <input type="text" name="age" onChange={onChangeForm} />
                <br /> <br />
                <button type="submit">Submit</button>
            </form>

           
        </div>
    )
}

export default Form