const Register =({onSubmit})=> {

    const handleSubmit =(event)=> {
        event.preventDefault();
        onSubmit({
            username: event.target["username"].value,
            password: event.target["password"].value,
            email: event.target["email"].value,
            realName: event.target["realName"].value,
            bio: event.target["bio"].value,
            image: event.target["image"].value,
        })

    }

    return <div>
        <form onSubmit={handleSubmit}>
            Username:
            <br/>
            <input type="string" name="username" required/>
            <br/>
            Password:
            <br/>
            <input type="password" name="password" required/>
            <br/>
            Email:
            <br/>
            <input type="email" name="email" required/>
            <br/>
            Full name:
            <br/>
            <input type="string" name="realName" required/>
            <br/>
            Biography:
            <br/>
            <textarea type="string" name="bio" required/>
            <br/>
            Image:
            <br/>
            <input type="string" name="image" required/>
            <br/>
            <button type="submit">REGISTER</button>
        </form>
    </div>
}

export default Register;