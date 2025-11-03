# Weather App

A simple and elegant weather application built with React that displays current weather conditions for any city using the OpenWeatherMap API.

## Features

- 🌤️ Real-time weather data
- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, and wind speed
- 📅 Show current date
- 💨 Weather descriptions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (get it from [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd checking-weather
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```bash
cp .env.example .env
```

4. Add your OpenWeatherMap API key to the `.env` file
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### Available Scripts

#### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm test`

Launches the test runner in interactive watch mode.

## Deployment to Vercel

### Step 1: Push to GitHub

Make sure your code is pushed to a GitHub repository.

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### Step 3: Add Environment Variables

In your Vercel project settings:
1. Go to "Settings" → "Environment Variables"
2. Add the following variable:
   - **Name**: `REACT_APP_WEATHER_API_KEY`
   - **Value**: Your OpenWeatherMap API key
3. Click "Save"

### Step 4: Deploy

Click "Deploy" and Vercel will build and deploy your app automatically!

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_WEATHER_API_KEY` | Your OpenWeatherMap API key |

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data provider
- [Create React App](https://create-react-app.dev/) - React toolchain

## License

This project is open source and available under the MIT License.

