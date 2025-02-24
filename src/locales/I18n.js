import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './Uz';
import ru from './Ru';
import en from './En';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      en: { translation: en },
      ru: { translation: ru }
    },
    lng: "ru", // Standart til
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
