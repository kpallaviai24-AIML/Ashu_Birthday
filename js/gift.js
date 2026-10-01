/* =========================================
   GIFT INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const gift =
            document.getElementById(
                "gift-box"
            );


        gift.addEventListener(
            "click",
            openGift
        );


        gift.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    openGift();

                }

            }
        );

    }
);


/* =========================================
   OPEN GIFT
========================================= */

function openGift() {

    const gift =
        document.getElementById(
            "gift-box"
        );


    const message =
        document.getElementById(
            "gift-message"
        );


    gift.classList.add("opened");


    message.classList.add(
        "show-message"
    );


    setTimeout(
        () => {

            showPage("memories");

        },
        1800
    );

}