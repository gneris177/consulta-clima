async function getData(city, state) {
    try {
        const response = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${city},${state}`);
        const date = await response.json();
        console.log(date)
    } catch (error) {
        
    }
}

getData(city = 'Belo Horizonte', state = 'minas gerais');