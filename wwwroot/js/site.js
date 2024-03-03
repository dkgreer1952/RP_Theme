///<reference path="../lib/jquery/jquery.js" />

function setTheme(theme) {
    if (theme == 'light' || theme == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
};

function saveTheme(theme) {

    if (theme == 'light' || theme == 'dark') {
        localStorage.setItem('Theme', theme);
    }
    else if (theme == 'system') {
        localStorage.removeItem('Theme');
    }

    setTheme(getTheme());
};

window.addEventListener('storage', (event) => {
    if (event.storageArea != localStorage) return;
    if (event.key == 'Theme') {
        setTheme(getTheme());
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem('Theme') == null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
});
