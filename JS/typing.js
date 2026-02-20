const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Bussiness";
            }, 0);
            setTimeout(() => {
                text.textContent = "Meetings";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Social Media Handles";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);