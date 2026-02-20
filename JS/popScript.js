      const display = document.querySelector(".display"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");

      showBtn.addEventListener("click", () => display.classList.add("active"));

      overlay.addEventListener("click", () => display.classList.remove("active")
      );

      closeBtn.addEventListener("click", () => display.classList.remove("active")
      );