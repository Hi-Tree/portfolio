const controls = document.querySelector(".controls");
const control = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");

function pageTransitions() {
    // Remove the active button class on the buttons that are not selected
    control.forEach((btn) => {
        btn.addEventListener("click", function () {
            const curActiveBtn = document.querySelector(".active-btn");
            if (curActiveBtn) {
                curActiveBtn.classList.remove("active-btn");
            }
            this.classList.add("active-btn");

            const id = this.dataset.id;
            console.log(id);
            if (id) {
                // Remove active class from all sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                })

                // Add active class to the corresponding section
                const element = document.getElementById(id);
                
                element.classList.add('active');
            }

        });
    });

}

pageTransitions();

document.getElementById('downloadButton').addEventListener('click', function() {
    window.location.href = '/portfolio/DownloadServlet'; // Redirect to the servlet endpoint
});