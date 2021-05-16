//btn submit and inptus city and state
const btnNow = document.querySelector(".btnNow");
const city = document.querySelector(".inputCity");
const state = document.querySelector(".inputState");
//view
const search = document.querySelector(".search");
const viewS = document.querySelector(".view");
//element text
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");
const cityNameContry = document.querySelector(".cityNameContry");
const cityName = document.querySelector(".cityName");
const description = document.querySelector(".description");


let date;

async function getData() {
  try {
    const response = await fetch(
      `https://weather.contrateumdev.com.br/api/weather/city/?city=${city.value},${state.value}`
    );
    date = await response.json();
  } catch (e) {
    alert("Algo deu errado");
  }
}


const view = async () => {
  await getData()
  //style
  search.style.display = 'none';
  viewS.style.display = 'block';
  //set text
  temperature.innerHTML= date.main.temp;
  cityName.innerHTML = date.name;
  cityNameContry.innerHTML = `${date.name} - ${date.sys.country}`;
  description.innerHTML = date.weather[0].description;
};


btnNow.onclick = () => view();
