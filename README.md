# Weather App

A React-based weather application that displays real-time weather information for the user's current location or any searched city. 

#ScreenShot

1. 1st image
<img width="1280" alt="Weather1" src="https://github.com/SwarupDeb/Weather-APP/assets/55588687/28e195a9-fdc9-449b-841a-d5ceb58e5cfa">

2.2nd image
<img width="1280" alt="weather2" src="https://github.com/SwarupDeb/Weather-APP/assets/55588687/23fbeaa6-d324-46e2-9c10-4cef09994883">

## Features

- Real-time weather information based on the user's location.
- Search functionality for getting weather details of any city.
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

## Approach and Technologies Used

### Approach

1. **Geolocation API**: Used to get the user's current location coordinates.
2. **OpenWeatherMap API**: Fetches real-time weather data based on the location coordinates or the searched city.
3. **Dynamic Background Change**: The background image changes according to the weather conditions (e.g., sunny, cloudy, rainy) and the time of day (day or night).
4. **Component Structure**: The app is divided into multiple components:
   - `App.js`: The main component that initializes the application.
   - `currentLocation.js`: Manages fetching weather data based on the user's location.
   - `forcast.js`: Handles the search functionality and displays weather data for the searched city.
5. **React State Management**: Uses React's state and lifecycle methods to manage and update the weather data and UI dynamically.

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making API requests to the OpenWeatherMap API.
- **React-animated-weather**: For displaying animated weather icons.
- **React-live-clock**: For displaying the current time.
- **CSS**: For styling the application and managing the dynamic background changes.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- Animated weather icons by [React Animated Weather](https://github.com/erikflowers/weather-icons).
