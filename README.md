
# Weather App

A React-based weather application that displays real-time weather information for the user's current location or any searched city. The app dynamically updates the background image according to the weather and time of day (day/night).

## Features

- Real-time weather information based on the user's location.
- Search functionality for getting weather details of any city.
- Dynamic background image change based on weather and time of day.
- Animated weather icons.
- Displays temperature, humidity, visibility, and wind speed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to the `apiKeys.js` file:

   ```javascript
   // apiKeys.js
   export default {
     key: "YOUR_API_KEY",
     base: "https://api.openweathermap.org/data/2.5/",
   };
   ```

4. Start the application:

   ```bash
   npm start
   ```

## Usage

- On launching, the app will ask for location access to provide weather data for your current location.
- You can search for any city using the search bar to get its current weather details.
- The background image of the app changes based on the weather conditions and time of day (day/night).

## File Structure

- `App.js`: The main component that renders the application.
- `currentLocation.js`: Handles fetching weather data based on the user's current location.
- `forcast.js`: Manages the search functionality and displays weather information for the searched city.
- `serviceWorker.js`: Optional service worker for enabling offline capabilities.

## Contributing

1. Fork the repository.
2. Create your feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.



## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- Animated weather icons by [React Animated Weather](https://github.com/erikflowers/weather-icons).


