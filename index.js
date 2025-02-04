const carName = document.getElementById("Name");
const modeName = document.getElementById("Model");
const ColorName = document.getElementById("Color");
const clickBtn = document.getElementById("addCartButton");

clickBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = carName.value;
    let model = modeName.value;
    let color = ColorName.value;

    let carsData = document.querySelectorAll("cars_data");
    let newDiv = document.createElement("div");

})