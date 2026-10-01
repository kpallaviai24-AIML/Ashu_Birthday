/* =========================================
   GLOBAL STATE
========================================= */

let currentPage = "welcome";


/* =========================================
   DOM READY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

        showPage("welcome");

    }
);


/* =========================================
   SHOW ONE PAGE AT A TIME
========================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    /* Hide every page */

    pages.forEach(page => {

        page.classList.remove("active");

    });


    /* Find requested page */

    const target =
        document.getElementById(pageId);


    if (!target) {

        console.error(
            `Page "${pageId}" not found.`
        );

        return;

    }


    /* Show only requested page */

    target.classList.add("active");


    currentPage = pageId;


    /* Start at top of the page */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   NAVIGATION
========================================= */

function initializeNavigation() {

    /* -----------------------------------------
       BEGIN SURPRISE BUTTON
    ----------------------------------------- */

    const startButton =
        document.getElementById(
            "start-button"
        );


    if (startButton) {

        startButton.addEventListener(
            "click",
            () => {

                showPage("gift");

            }
        );

    }


    /* -----------------------------------------
       NEXT BUTTONS
    ----------------------------------------- */

    const nextButtons =
        document.querySelectorAll(
            ".next-button"
        );


    nextButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const nextPage =
                    button.dataset.next;


                if (nextPage) {

                    showPage(nextPage);

                }

            }
        );

    });

}