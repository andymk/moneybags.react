require("dotenv").config();

//const config = require(`../app-config/app-config-${process.env.REACT_APP_ENV}`).default;

const appConfig = {
  //endPoints: config.endPoints
  endPoints: {
    //base: "http://localhost:5000/api"
    base: "http://moneybags-api.azurewebsites.net/api"
  }
};

export default appConfig;
