
const loader = () => {
    let percentage = 0;
    const percentageElement = document.getElementById('loader-mid');
    const interval = setInterval(() => {
        percentage++;
        percentageElement.textContent = `${percentage}%`;

        if (percentage === 100) {
            clearInterval(interval); // Stop animation
        }
    }, 8);

    
    const loaderBack = document.getElementById('loader-back')
    setTimeout( () => {
        loaderBack.classList.add("loader-back-anim")
        setTimeout( () => {
            loaderBack.style.display = "none"
            document.body.classList.remove("no-scroll")
            navLink = document.getElementsByClassName("nav-link")
            for(element of navLink) {
                element.classList.add("nav-link-anim")
            }
        },1000)
    }, 900)
}

loader()