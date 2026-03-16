document.addEventListener("DOMContentLoaded", () => {
    const msgElement = document.getElementById("toastMessage");
    if (!msgElement) return;

    const message = msgElement.dataset.message;

    if (message) {
        const toast = document.getElementById("toast");

        // Fade in
        setTimeout(() => {
            toast.style.opacity = "1";
        }, 100);

        // Fade out after 3 seconds
        setTimeout(() => {
            toast.style.opacity = "0";
        }, 3000);
    }
});
