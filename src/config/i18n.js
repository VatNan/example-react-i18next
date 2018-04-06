import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'th'
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          age: { label: 'Age', },
          home: { label: 'Home', },
          name: { label: 'Name', },
        },
      },
      th: {
        translation: {
          age: { label: 'อายุ', },
          home: { label: 'บ้าน', },
          name: { label: 'ชื่อ', },
        },
      },
    },
  })

export default i18next