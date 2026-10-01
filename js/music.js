/* =========================================
   MUSIC
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const audio =
            document.getElementById(
                "birthday-audio"
            );


        const button =
            document.getElementById(
                "music-button"
            );


        button.addEventListener(
            "click",
            () => {

                if (audio.paused) {

                    audio.play();

                    button.textContent = "❚❚";

                } else {

                    audio.pause();

                    button.textContent = "▶";

                }

            }
        );

    }
);