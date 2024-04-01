document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    (function () {
        // Function to handle switching between tabs
        function handleTabSwitch() {
            document.querySelectorAll(".control").forEach(button => {
                button.addEventListener("click", function() {
                    document.querySelector(".active-btn").classList.remove("active-btn");
                    this.classList.add("active-btn");
                    document.querySelector(".active").classList.remove("active");
                    document.getElementById(button.dataset.id).classList.add("active");
                })
            });
        }
    
        // Function to initialize Typed.js
        function initializeTyped() { // Add function name 'initializeTyped'
            var typed1 = new Typed(".typing-1",{
                strings: [
                    "Web Developer", "a Coder","Tech Enthusiast", "front-end developer"
                ],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            var typed2 = new Typed(".typing-2",{
                strings: [
                    "WEB DEVELOPER", "a Coder"
                ],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }
    
        // Call functions to initialize tab switching and Typed.js
        handleTabSwitch();
        initializeTyped();
    
        // Toggle light mode function
        // Toggle light mode function
document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
    })();
});
