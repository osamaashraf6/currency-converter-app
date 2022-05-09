var inpt = document.querySelector(".section__wrapper__input__inpt");
var sele = document.querySelectorAll(
    ".section__wrapper__forms__form__side__right__select__sele"
);
var sele__from = document.querySelector(
    ".section__wrapper__forms__form__side__right__select__sele.from"
);

var sele__to = document.querySelector(
    ".section__wrapper__forms__form__side__right__select__sele.to"
);
var after__convert = document.querySelector(".section__wrapper__heading2");
var btn = document.querySelector(".section__wrapper__btn");
var bir = document.querySelector("#bir");
var iki = document.querySelector("#iki");
var uc = document.querySelector("#uc");
var dort = document.querySelector("#dort");

// =================================================================
for (let i = 0; i < sele.length; i++) {
    for (count in country_list) {
        let option__tag = `<option value="${count}">${count}</option>`;
        sele[i].insertAdjacentHTML("beforeend", option__tag);
    }
}
// =================================================================
btn.addEventListener("click", function(e) {
    e.preventDefault();
    let url = `https://v6.exchangerate-api.com/v6/0c3317c7460c73091a9e1e2a/latest/${sele__from.value}`; // ask why sele.value the correct is option.value ask why sele.value
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let to__cureent = data.conversion_rates[sele__to.value];
            let ele = to__cureent * inpt.value;
            bir.innerHTML = inpt.value;
            iki.innerHTML = sele__from.value;
            uc.innerHTML = " = " + ele;
            dort.innerHTML = sele__to.value;
        });
});
// =================================================================