import { useTranslation } from 'react-i18next'

const Login =({onSubmit})=> {


    const {t} = useTranslation();

    const handleSubmit =(event)=> {
        event.preventDefault();
        onSubmit({
            username: event.target["username"].value,
            password: event.target["password"].value
        })

    }

    return <div>
        <form onSubmit={handleSubmit}>
            {t("label.username")}
            <br/>
            <input type="text" name="username" required/>
            <br/>
            {t("label.password")}
            <br/>
            <input type="password" name="password" required/>
            <br/>
            <button type="submit"> {t("button.login")}</button>
        </form>
    </div>
}

export default Login