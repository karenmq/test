// COLLAPSIBLLES

var collapse = document.getElementsByClassName("collapsible");

var n;

for (n = 0; n < collapse.length; n++) {
  collapse[n].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
