/* ================= EMAILJS ================= */

(function () {
    emailjs.init("VQVBNlbvGlSUSaFfg"); // 🔴 replace
})();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_7w4ccas",   // 🔴 replace
            "template_pvnuaff",  // 🔴 replace
            this
        ).then(() => {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        }, (error) => {
            alert("❌ Failed to send message. Try again.");
            console.error(error);
        });
    });
}

/* ================= IMAGE ZOOM ================= */

function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = src;
    modal.classList.add("active");
}

// Close modal on click
document.addEventListener("click", function (e) {
    const modal = document.getElementById("imageModal");

    if (e.target.classList.contains("close-modal") ||
        e.target === modal) {
        modal.classList.remove("active");
    }
});

