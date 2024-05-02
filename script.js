const hamburgerICON = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const darken = document.querySelector(".darken");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const tel = document.querySelector(".bi-telephone")


hamburgerICON.addEventListener("click", () =>{
    sidebar.classList.toggle("active");
    darken.classList.toggle("active");
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");

    if(sidebar.classList.contains("active")){
        tel.style.display = "none";
    } else{
        tel.style.display = 'block'
    }
})