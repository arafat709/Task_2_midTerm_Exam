const clickBtn = document.getElementById("addCartButton");
let carData = document.querySelector(".car-data");

clickBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const carName = document.getElementById("name").value;
    const modeName = document.getElementById("model").value;
    const ColorName = document.getElementById("color").value;

    let carNewName = document.createElement("h4");
    let carNewModel = document.createElement("h4");
    let carNewColor = document.createElement("h4");
    let newIcon = document.createElement("i");

    newIcon.classList.add("fa-solid", "fa-xmark");

    carNewName.innerText = carName
    carNewModel.innerText = modeName
    carNewColor.innerText = ColorName

    let carList = document.createElement("div");

    carList.appendChild(carNewName);
    carList.appendChild(carNewModel);
    carList.appendChild(carNewColor);
    carList.appendChild(newIcon)

    carList.classList.add("carListDiv")

    carData.appendChild(carList);

    newIcon.addEventListener("click", () => {
        carList.style.display = "none"
    })
});