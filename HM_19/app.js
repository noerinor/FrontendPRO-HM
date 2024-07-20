const apiKey = "039650be41b8e84ab73c1c445c3729fc";

      async function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          document.getElementById(
            "temperature"
          ).innerText = `Temperature: ${data.main.temp}°C`;
          document.getElementById(
            "feels-like"
          ).innerText = `Feels like: ${data.main.feels_like}°C`;
          document.getElementById(
            "humidity"
          ).innerText = `Humidity: ${data.main.humidity}%`;
          document.getElementById(
            "description"
          ).innerText = `Description: ${data.weather[0].description}`;
          document.getElementById("error-message").innerText = "";
        } else {
          document.getElementById(
            "error-message"
          ).innerText = `Error: ${data.message}`;
        }
      }

      document.getElementById("update-button").addEventListener("click", () => {
        const city = document.getElementById("city-input").value;
        fetchWeather(city);
      });

      fetchWeather("Kyiv");
      
     