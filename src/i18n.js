import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        "language.english": "english",
        "language.portuguese": "portuguese",
        "label.username": "username",
        "label.password": "password",
        "button.login": "login",
        "button.register": "register",
        "button.showLogin": "show login",
        "button.showRegister": "show register",
        "button.saveEditProfile": "Save",
    }
  },
  pt: {
    translation: {
      "language.english": "ingles",
      "language.portuguese": "portugues",
        "label.username": "utilizador",
        "label.password": "password",
        "button.login": "entrar",
        "button.register": "registar",
        "button.showLogin": "mostrar login",
        "button.showRegister": "mostrar registo",
        "button.saveEditProfile": "guardar",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;