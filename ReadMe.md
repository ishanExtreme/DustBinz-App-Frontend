<h1 align='center'>DustBinz APP</h1>

### Basic Idea:
This repo contains the code for the frontend of the DustBinz APP.

### [Backend Repo](https://github.com/ishanExtreme/Dustbinz-Backend)

### Running using Expo Go(For Android Only!!!):
* Step-1: Download *Expo Go* from Playstore.
* Step-2: Open the following [link](https://expo.io/@_extreme_/projects/DustBinz).
* Step-3: Scan the QR code on the right side of the screen with the *Expo Go* APP downloaded in Step-1.
* **OR**
* Straight away run the APP by clicking *Open project in the browser* this will run the APP in an online android simulator.
* **Note: It uses the backend hosted on [heroku](https://dustbinz-backend.herokuapp.com/)** 


### Running locally:

* Step-1: npm i
* Step-2: install expo globally *npm install --global expo-cli*
* Step-3: run *expo start*
* **Note: It uses the backend hosted on [heroku](https://dustbinz-backend.herokuapp.com/)**

### If locally setup backend needs to be run(not recommended ⚠️):

* Setp-1: Get IP address from bottom left corner of the expo browser tab which opens up on running *expo start*
* Step-2: change urls in app/config/settings.js with this ip address and the port number where the local server is running

### Overview of some Tech stack/Frameworks/Libraries used:

* React Native
* Expo
* Google Maps: for displaying bin locations on MAP and also for getting GPS direcetion
* Formik: for handling forms
* apisauce: for handlig API's
* yup: for validations
