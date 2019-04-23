export function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function windowFactory() {
    return window;
}

export function localStorageFactory() {
    return window.localStorage;
}

declare const require;

export function loadTranslationFile(): string {
    const validLanguages = ['pt', 'en'];
    const localStorage = localStorageFactory();
    const requiredLanguage = getParameterByName('lang') || localStorage.getItem('lang') || 'en';
    const usedLanguage = validLanguages.some(l => l === requiredLanguage) ? requiredLanguage : 'en';
    console.log(usedLanguage);

    localStorage.setItem('lang', usedLanguage);
    return require(`raw-loader!../locale/messages.${usedLanguage}.xlf`);
}
