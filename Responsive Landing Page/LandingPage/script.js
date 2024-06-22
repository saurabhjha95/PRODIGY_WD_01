const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var form = e.target;

  var formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        response.json().then(function (data) {
          if (Object.hasOwn(data, "errors")) {
            alert(
              data["errors"]
                .map(function (error) {
                  return error["message"];
                })
                .join(", ")
            );
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        });
      }
    })
    .catch(function (error) {
      alert("Oops! There was a problem submitting your form.");
    });
});
