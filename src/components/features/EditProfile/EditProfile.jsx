import { useTranslation } from 'react-i18next'

const EditProfile =({onSubmit})=> {

    const {t} = useTranslation();

    const handleSubmit =(event)=> {
        event.preventDefault();
        onSubmit({
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
            <input type="text" name="username"  readonly/>
            <br/>
            Password:
            <br/>
            <input type="password" name="password"  readonly/>
            <br/>
            Email:
            <br/>
            <input type="email" name="email" required/>
            <br/>
            Full name:
            <br/>
            <input type="text" name="realName" required/>
            <br/>
            Biography:
            <br/>
            <textarea type="text" name="bio" required/>
            <br/>
            Image:
            <br/>
            <input type="text" name="image" required/>
            <br/>
            Membro:
            <br/>
            <input type="checkbox" name="isMember"/>
            <br/>
            Administrador:
            <br/>
            <input type="checkbox" name="isAdmin"/>
            <br/>
            <button type="submit">{t("button.saveEditProfile")}</button>
        </form>
    </div>
}

//TODO
//permissões para editar o próprio perfil e não outro (backend?)
//permissões para editar checkbox
export default EditProfile;