"use strict";

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        console.log("Registering service-worker.js");
        navigator.serviceWorker.register("/app/service-worker.js");
    }
});
