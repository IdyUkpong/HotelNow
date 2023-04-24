# HotelNow Project Setup

This guide provides step-by-step instructions on how we set up the frontend of the HotelNow project using the Vite build tool and React with TypeScript.

## Prerequisites

- Node.js and npm should be installed on your system.
- Yarn should be installed globally.

## Steps

- Open a terminal or command prompt and navigate to the directory where you want to create your new project.

- Run the following command to create a new Vite project with React and TypeScript:

`yarn create vite client`

This command will create a new folder named `client` and initialize a new Vite project with the React and TypeScript template.

- Once the project is created, navigate to the `client` folder:

- Run the following command to install the dependencies:

`yarn`

- This command will install all the necessary packages and dependencies required for the project.

- Once the dependencies are installed, you can start working on your project using the command

`yarn dev`

Next, run this command to install Tailwind CSS and its dependencies:

`yarn add tailwindcss postcss autoprefixer`

This command will install Tailwind CSS, PostCSS, and Autoprefixer.

Next, run the following command to generate a Tailwind configuration file:

`npx tailwindcss init -p`

In the index.css file located in the src folder, add the following lines to import the base, components, and utilities styles from Tailwind CSS:

```tailwind
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add the code below to the `tailwind.config.js` file.

```typescript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### All icons are gotten from `https://heroicons.com/`
