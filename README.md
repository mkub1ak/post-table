# PostTable

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Installation

```
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build 
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running production locally
```
npx serve dist/post-table/browser
```
Once the server is running, open your browser and navigate to `http://localhost:3000/`. 


## Building and running docker image locally using nginx
```
docker build --no-cache -t post-table . 
docker run -d -p 8080:80 post-table
```
Once the server is running, open your browser and navigate to `http://localhost:8080/`. 

## CD Vercel
If you wish to see the app running online pelase navigate to ``.
