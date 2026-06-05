function openWatsonChat() {

    if (
        window.watsonInstance &&
        typeof window.watsonInstance.openWindow === "function"
    ) {
        window.watsonInstance.openWindow();
    }
}