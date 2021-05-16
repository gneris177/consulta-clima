let btnNow = document.querySelector(".btnNow");
let cityp = document.querySelector(".inputCity");
let statep = document.querySelector(".inputState");

//view
let sectionView = document.querySelector(".sectionView");
let temp = document.querySelector(".temp");
let tempMin = document.querySelector(".tempMin");
let tempMax = document.querySelector(".tempMax");
let feelsLike = document.querySelector(".feelsLike");
let humidity = document.querySelector(".humidity");

let date;

async function getData(city, state) {
  try {
    const response = await fetch(
      `https://weather.contrateumdev.com.br/api/weather/city/?city=feira de santana,bahia`
    );
    date = await response.json();
  } catch (e) {
    alert("Algo deu errado");
  }
}

const view = async () => {
  await getData();
  humidity.innerHTML = date.main.humidity;
  temp.innerText = `${date.main.temp}°`;
  feelsLike.innerText = date.main.feels_like;
  tempMin.innerText = date.main.temp_min;
};

btnNow.onclick = () => view();