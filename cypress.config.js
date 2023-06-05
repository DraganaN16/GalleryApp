const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
  //defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com/",

    env: {
      registeredEmail: "draganan@gmail.com",
      validPassword: "pokusavam100",
      validFirstName: "Pera",
      validLastName: "Peric"
      
      //myGalleriesButtonLabel: "My Galleries"

    },
    baseApiUrl: "https://gallery-api.vivifyideas.com/api/",
  },
});
