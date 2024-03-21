import useInputState from "../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('naim')
    const emailState = useInputState('naim@gmail.com');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value='Submit' name="" id="" />
            </form>
        </div>
    );
};

export default HookForm;