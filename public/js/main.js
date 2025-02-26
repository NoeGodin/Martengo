const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  }),
);

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".block-engraving__prices li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((li) => {
        li.innerHTML = li.textContent;
      });

      this.innerHTML = `<span class="badge badge--secondary">${this.textContent}</span>`;
    });
  });
});
