/* =========================================
   FINAL CELEBRATION
========================================= */

function startFinalCelebration() {

    createHearts();

    createConfetti();


    const audio =
        document.getElementById(
            "birthday-audio"
        );


    audio.play().catch(() => {

        console.log(
            "Music playback requires user interaction."
        );

    });

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    setInterval(
        () => {

            const heart =
                document.createElement("div");


            heart.textContent =
                ["❤️", "💕", "💖", "💗"]
                [
                    Math.floor(
                        Math.random() * 4
                    )
                ];


            heart.className =
                "floating-heart";


            heart.style.left =
                Math.random() * 100 +
                "vw";


            heart.style.animationDuration =
                4 +
                Math.random() * 3 +
                "s";


            document.body.appendChild(
                heart
            );


            setTimeout(
                () => {

                    heart.remove();

                },
                7000
            );

        },
        500
    );

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.textContent =
            ["🎉", "✨", "🎊", "💖"]
            [
                Math.floor(
                    Math.random() * 4
                )
            ];


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.animationDuration =
            2 +
            Math.random() * 4 +
            "s";


        document.body.appendChild(
            piece
        );


        setTimeout(
            () => {

                piece.remove();

            },
            6000
        );

    }

}