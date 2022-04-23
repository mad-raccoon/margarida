const Login =({onSubmit})=> {

    const handleSubmit =(event)=> {
        event.preventDefault();
        onSubmit({
            username: event.target["username"].value,
            password: event.target["password"].value
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
            <button type="submit">LOGIN</button>
        </form>
    </div>
}

export default Login