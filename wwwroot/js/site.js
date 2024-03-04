///<reference path="../lib/jquery/jquery.js" />

/* Set the Bootstrap theme attribute */
function setTheme(theme) {
    if (theme == 'light' || theme == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
};

/* Persist the theme to browser storage, or remove it to default to the Windows mode */
function saveTheme(theme) {

    if (theme == 'light' || theme == 'dark') {
        localStorage.setItem('Theme', theme);
    }
    else if (theme == 'system') {
        localStorage.removeItem('Theme');
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
