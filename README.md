# Country Info App 🌍

A modern web application to explore country information, including population trends, neighboring countries, and flag details.

https://the-country-info-app-iota.vercel.app/
---

## Features

- **View Country List**: See a list of all countries with search and filter options.
- **Country Details**: Access detailed information about each country, including a population trend chart, neighboring countries, and flag.
- **Responsive Design**: Built with modern, elegant, and minimalistic styling.

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **Git**

---

### Clone the Repository

To get started, clone the repository and navigate to the project folder:

git clone https://github.com/your-username/the-country-info-app.git
cd the-country-info-app

### Install Dependencies
For the Client:
Navigate to the client folder and install dependencies:


cd client
npm install
For the Server:
Navigate to the server folder and install dependencies:

 
cd ../server
npm install
Configuration
Environment Variables
The application requires some environment variables to function correctly. Create a .env file inside the server folder and configure it as follows:

PORT=8000
API_AVAILABLE_COUNTRIES=<API_URL_FOR_COUNTRIES>
API_BASE_COUNTRIES_INFO=<API_URL_FOR_COUNTRY_INFO>
API_POPULATION=<API_URL_FOR_POPULATION>
API_FLAG=<API_URL_FOR_FLAGS>
Replace <API_URL_FOR_*> with the appropriate URLs from your API provider.

### Running the Application
Start the Client
In the client folder, start the frontend:

npm run dev
The client will run on http://localhost:5173.

Start the Server
In the server folder, start the backend:

npm start
The server will run on http://localhost:8000.

### Testing the Application
Backend
Verify the backend is running by visiting:
http://localhost:8000/api/countries to see all available countries.
http://localhost:8000/api/countries/<id> (replace <id> with a valid country code) to fetch country-specific data.
Frontend
Open http://localhost:5173 in your browser.
Navigate through the app:
View the country list.
Click on a country to see detailed information and population charts.


