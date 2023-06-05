// decare variables
const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");
const main = document.querySelector("[data-js-main]");

// clickSubmit function
function clickSubmit(event) {
  event.preventDefault();

  const rating = new FormData(event.target).get("rating");

  if (rating) {
    main.innerHTML = template.innerHTML.replace(/{{rating}}/, rating);
  }
}
// add event listener
form.addEventListener("submit", clickSubmit);
