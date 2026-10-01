/* =========================================
   CAKE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const candles =
            document.querySelectorAll(
                ".candle"
            );


        const wishMessage =
            document.getElementById(
                "wish-message"
            );


        let blownCount = 0;


        candles.forEach(candle => {

            candle.addEventListener(
                "click",
                () => {

                    if (
                        candle.classList.contains(
                            "blown"
                        )
                    ) {

                        return;

                    }


                    candle.classList.add(
                        "blown"
                    );


                    candle.textContent =
                        "💨";


                    blownCount++;


                    if (
                        blownCount ===
                        candles.length
                    ) {

                        wishMessage.textContent =
                            "✨ Make your wish... ✨";


                        setTimeout(
                            () => {

                                showPage("final");

                                startFinalCelebration();

                            },
                            1500
                        );

                    }

                }
            );

        });

    }
);