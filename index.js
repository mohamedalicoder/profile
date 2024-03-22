let swit = document.querySelectorAll(".toggle");


for (let i = 0; i < swit.length; i++) {
  swit[i].addEventListener("click", () => {
    const body = document.body;
    let x = body.classList.toggle("black");
    localStorage.setItem("dark", x);

    console.log("hallo world");
  });
  localStorage.getItem("dark");
}