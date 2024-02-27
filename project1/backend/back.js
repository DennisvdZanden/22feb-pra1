const clickableSentence = document.getElementById('clickable-sentence');
const hiddenContent = document.getElementById('hidden-content');
let contentVisible = false; 
clickableSentence.addEventListener('click', function () {
    if (contentVisible) {
        hiddenContent.style.display = 'none';
        clickableSentence.style.color = ''; 
    } else {
        hiddenContent.style.display = 'block';
        clickableSentence.style.color = 'gold';
    }
    
    contentVisible = !contentVisible;
});



document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("snowflakes-container");

    function createSnowflake(event) {
        const snowflake = document.createElement("span");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "&#10052;"; 
        
        

        const offsetX = Math.random() * 1 - 1; 
        const offsetY = Math.random() * 1 - 1;
        
        snowflake.style.left = event.pageX + offsetX + "px"; 
        snowflake.style.top = event.pageY + offsetY + "px"; 
       
        container.appendChild(snowflake);

        const duration = Math.random() * 4000 + 2000; 


        const animation = snowflake.animate(
            [{ transform: `translateY(${event.pageY + offsetY}px)`, opacity: 1 }, { transform: "translateY(100vh)", opacity: 0.3 }],
            { duration: 5000 }    
        );

        animation.onfinish = function() {
            snowflake.remove();
        };
    }

    document.addEventListener("mousemove", createSnowflake);
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("sun-container");

    function createSun(event) {
        const sun = document.createElement("span");
        sun.classList.add("sun");
        sun.innerHTML = "&#9728;"; 

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; 
        
        if (currentMonth >= 5 && currentMonth <= 9) {
            sun.style.left = event.pageX + "px";
            sun.style.top = event.pageY + "px";

            container.appendChild(sun);

            const duration = Math.random() * 4000 + 2000;

            const animation = sun.animate(
                [{ transform: "scale(1)", opacity: 1 }, { transform: "scale(3)", opacity: 0 }],
                { duration: duration }
            );

            animation.onfinish = function() {
                sun.remove();
            };
        }
    }

    document.addEventListener("mousemove", createSun);
});