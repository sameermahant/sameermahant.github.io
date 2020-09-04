if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(reg => { console.log("Service worker registered. Scope is: ", reg.scope) })
            .catch(err => { console.log("Service worker registration failed.") });
    });
} else {
    console.log("Service worker is not supported.");
}
