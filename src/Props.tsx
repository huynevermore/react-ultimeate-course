import Button from "./components/Button"
import { useAppContext } from "./context/AppContext"
interface ComponentProps {
    firstName: string,
    lastName?: string,
    component1: React.ElementType,
    component2: React.ReactNode,
    [key: string]: any
}

function Props({ firstName, lastName = 'nguyen', component1: Component1, component2, ...restProps }: ComponentProps) {
    console.log('props: ', {
        Component1,
        component2
    })
    const { toggleShowLoading } = useAppContext();

    return (
        <div>
            Props <br />
            <Button 
                text="Submit"
                type="button"
                className="button"
                onClick={() => {
                    toggleShowLoading()
                }}
            >
                this is button
            </Button>
            First Name: {restProps['first-name']} <br />
            Component 1: {<Component1 />} <br />
            Component 2: {component2}
        </div>
    )
}

export default Props