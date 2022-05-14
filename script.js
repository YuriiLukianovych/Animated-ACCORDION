const accordionBtnList = document.querySelectorAll(".accordion__btn");

accordionBtnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        toggle(e.currentTarget.parentNode, 500); // main function !!!
    });
});

function show(el, duration) {
    const elBody = el.querySelector(".accordion__text");
    const btn = el.querySelector(".accordion__btn");
    const title = el.querySelector(".accordion__title");
    if (
        elBody.classList.contains("collapsing") ||
        el.classList.contains("show")
    ) {
        return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${duration}ms ease`;
    elBody.classList.add("collapsing");
    // el.classList.add("accordion__item_slidedown");
    btn.classList.add("active");
    title.classList.add("active");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
        elBody.classList.remove("collapsing");
        elBody.classList.add("collapse");
        el.classList.add("show");
        elBody.style["display"] = "";
        elBody.style["height"] = "";
        elBody.style["transition"] = "";
        elBody.style["overflow"] = "";
    }, duration);
}
function hide(el, duration) {
    const elBody = el.querySelector(".accordion__text");
    const btn = el.querySelector(".accordion__btn");
    const title = el.querySelector(".accordion__title");
    if (
        elBody.classList.contains("collapsing") ||
        !el.classList.contains("show")
    ) {
        return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("show");
    btn.classList.remove("active");
    title.classList.remove("active");
    elBody.classList.add("collapsing");
    window.setTimeout(() => {
        elBody.classList.remove("collapsing");
        elBody.classList.add("collapse");
        elBody.style["display"] = "";
        elBody.style["height"] = "";
        elBody.style["transition"] = "";
        elBody.style["overflow"] = "";
    }, duration);
}
function toggle(el, duration) {
    el.classList.contains("show") ? hide(el, duration) : show(el, duration);
}
