import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import uzTranslation from "/public/language/uz.json"
import ruTranslation from "/public/language/ru.json"
import engTranslation from "/public/language/eng.json"



i18n
//tilni aniqlab berish
.use(languagedetector)
//bog'lash
.use(initReactI18next)

.init({
    fallbackLng: 'uz',
    lng: "uz",
    debug: false,
    resources: {
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation},
        eng: {translation: engTranslation}
    }
})


export default i18n