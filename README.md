Deployed at https://spacexlaunchesdashboard.herokuapp.com/

SpaceEx app is a dashboard application showing all the data using spacEx api.
Application is based on REACT and using Context Api for state management and created using create-react-app.
Only consist of Functional components and hence used hooks api extensivly.
Try to follow DRY principle and functional programming.
For optimization and performance, debouncing, infinte scroll and useCallback is applied


Component and container files - 
1)App.js
2)FilterBox.js
3)LaunchPad.js
4)SpaceShuttle.js

=> App.js - 
-contains section and main part of the application
-<section> contains FilterBox component
-<main> contains LaunchPad container component

=>FilterBox.js
-contains three filters based on years, success launch and sucessland. All the values are getting from constants.js file
-receiving firstLoad, loading, shuttles values from ContextProvider

=>LaunchPad.js
-it is a container component, consist logic for infinte scroll and rendering all the  SpaceShuttle component
-InterSectionObserver Api is used for infinte scroll
-Based on the data receiver from the Api call through ContextProvider SpaceShuttle component is mapped.

=>SpaceShuttle.js
-presentational component only displaying data received from  LaunchPad.js.
-useRef is used to observe the last component for infinte scroll.

=>ContextProvider.js
- render App component as a children and passing all teh state vales and functions 
- contains all the api call management using a useEffect hook.
- debouncing is used to control the multiple api calls inside useEffect.
- maintain state of the whole app

=>Basic UI tests are done.
=>Apart from inbuilt Jest through create-react-app, for testing enzyme, jest-enzyme, react-test-rendered, enzyme-adapter-react-16 packages used.
=>setupTests.js consit of basis test setup for enzyme.


=>scope of improvement
-should include a clear filter option
-buttons selected state should be maintained
-image error handleing 






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
