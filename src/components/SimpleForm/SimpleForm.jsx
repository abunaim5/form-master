const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="text" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="submit" value='Submit' name="" id="" />
            </form>
        </div>
    );
};

export default SimpleForm;