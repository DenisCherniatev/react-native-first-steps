import i18n from "i18n-js";
import translations from "./translations.json";

i18n.fallbacks = true;
i18n.translations = translations;

export function localize(key) {
  return i18n.t(key);
}

export function setLocalization(langCode) {
  console.log(`[LANG] Set language to ${langCode}`);
  i18n.locale = langCode;
}

export function getLanguage() {
  return i18n.locale;
}