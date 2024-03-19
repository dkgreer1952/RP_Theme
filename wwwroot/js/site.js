///<reference path="../lib/jquery/jquery.js" />

/* Set the Bootstrap theme attribute */
function setTheme(theme) {
    switch (theme) {
        case 'light':
        case 'dark':
        case 'spacelab':
        case 'pulse':
        case 'minty':
        case 'simplex':  document.documentElement.setAttribute('data-bs-theme', theme); break;
        default:
    }
};

/* Persist the theme to browser storage, or remove it to default to the Windows mode */
function saveTheme(theme) {
    switch (theme) {
        case 'light':
        case 'dark':
        case 'spacelab':
        case 'pulse':
        case 'minty':
        case 'simplex': localStorage.setItem('Theme', theme); break;
        case 'system': localStorage.removeItem('Theme'); break;
        default:
    }

    setTheme(getTheme());
};

/* If the theme was changed on any tab, set it on this tab */
window.addEventListener('storage', (event) => {
    if (event.storageArea != localStorage) return;
    if (event.key == 'Theme') {
        setTheme(getTheme());
    }
});

/* If the Windows mode has changed and no over-riding theme is in browser storage, set the Bootstrap mode to the Windows mode */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem('Theme') == null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
});
