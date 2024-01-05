# Books App

The repository contains codes for the frontend, built using React JS, of a mock API with endpoint https://assignment.ongshak.com/

## Setup Instructions

### Clone Repository
Clone the repository using the following command:
```
git clone https://github.com/DarkerNemesis14/books_frontend.git
```

### Dependency installation
Install all the dependencies using the following command:
```
npm install
```

### Scripts
#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Code Structure
The necessary files are in the `src` directory

### `pages`
Contains the `.js` and `.css` files for all the pages of the app.

### `components`
Contains the `.js` and `.css` files for all the components used in the pages.

### `hooks`
Contains `.js` files for all the custom hooks used in the project.

### `context`
Contains `.js` files for all the contexts used in the project.

## Technologies
The React App contains the following additional packages:

### `react router dom`
Used for building a single page app.

### `js cookie`
Used for accessing cookies in the browser.

### `react loading`
Used for adding loading component.

### `framer motion`
Used for adding animation.

## Animation
Framer motion library is used to add animation in the app. Both the `login` and `feed` page contains animated components.

## API Integration
`fetch` API is used for making all the requests. The following API endpoints are used in the app:

### `rest-auth/login/`
Used to authenticate the user and get access and refresh tokens.

### `get_books/`
Used to fetch the book list.

### `rest-auth/token/refresh/`
Used to get new access token when exiting one expires.

### `rest-auth/logout/`
Used to request the server to log the user out./

**Note:** To bypass the CORS error, a CORS proxy server is used. All the request pass through the proxy server.

## Authentication
JSON Web Token (JWT) is an open standard for sharing JSON data between parties. It is specially useful for using with MERN Stack for it used JSON.\
In the app, the refresh and access JWT is used. The tokens are stored in the brower cookie during login.\
Access JWT has a exiration time of 6 hours. After the expiration time a new access JWT is fetched using the refresh JWT.\
The cookie is deleted upon logout and automatically after 1 day. Thereby, the user stays logged in for 1 day when the browser is closed.

## Deployment Instructions
The is built using `npm run build` script and deployed to Netlify at https://books14.netlify.app/

**Note:** As the website uses third party CORS proxy server, it may incur issues regarding CORS. The problem can be resolved from the server side or by deploying a custom CORS proxy server.