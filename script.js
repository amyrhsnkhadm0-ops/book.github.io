const themeToggle = document.getElementById("themeToggle");


// ================================
// بررسی حالت ذخیره شده
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}


// ================================
// تغییر حالت شب و روز
// ================================

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDarkMode =
            document.body.classList.contains("dark-mode");


        // حالت شب
        if (isDarkMode) {

            themeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        }

        // حالت روز
        else {

            themeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

}