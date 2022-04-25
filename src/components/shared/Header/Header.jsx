import { t } from "i18next";
import { useTranslation } from "react-i18next";
import "./Header.css"



const Header =({hasLogout, onLogout})=> {

    const {t, i18n} = useTranslation();

    const languages = [{id: "pt", label: t("language.portuguese")}, 
    {id: "en", label: t("language.english")}]

    return <div className="header">Margarida APP
   {hasLogout && <button onClick={onLogout}>Logout</button>}
    <ul>
        {languages.map(l=><li onClick={()=> i18n.changeLanguage(l.id)}>{l.label}</li>)}
  </ul>
    </div>
}

export default Header;