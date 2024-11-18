
# Simple Web Server with Node.js

This project sets up a basic web server using Node.js and Express, with three routes that respond with static messages.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Testing the Routes](#testing-the-routes)
- [Expected Responses](#expected-responses)
- [License](#license)

## Requirements

- Node.js (>= 14.x)
- npm (Node Package Manager, comes with Node.js)

## Installation

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/antishman/simple-web-server.git
   cd simple-web-server
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Running the Server

To run the Node.js server, execute the following command in your terminal:

```bash
node server.js
```

The server will start and listen on port 3000 by default.

## Testing the Routes

You can test the routes using a web browser or a REST client like Postman. The following endpoints are available:

- **GET /name**: Returns your full name.
- **GET /hobby**: Returns your favorite hobby as a JSON object.
- **GET /dream**: Returns a motivational message about your dream or goal in life.

## Expected Responses

- **GET /name**
  - Response: `Anteneh`
  
- **GET /hobby**
  - Response: 
    ```json
    {
      "hobby": "meditation"
    }
    ```
  
- **GET /dream**
  - Response: `To feel whole, to be alive`

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Instructions to Modify

1. Replace `antishman` in the clone URL with your actual GitHub username or the appropriate repository link.
2. If you have additional setup steps or configurations, feel free to add them to the README.