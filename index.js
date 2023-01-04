const acc = document.querySelectorAll(".accordion");

acc.forEach((acch) => {
    acch.addEventListener("click",toggleContent,false);
});

function toggleContent() {
    const img = this.childNodes[1];
    const content = this.nextElementSibling;
    const isActive = content.classList.contains("active");

    acc.forEach(acch => {
        const contentElem = acch.nextElementSibling;
        if(!contentElem.classList.contains("active")) {
            contentElem.classList.add("active");
            img.style.transform = 'rotate(0deg)';
        }
    });
    if(isActive) {
        content.classList.remove("active");
        img.style.transform = 'rotate(180deg)';
    }
}