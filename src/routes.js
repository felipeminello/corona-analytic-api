const routes = require("express").Router();

const coronaController = require("./app/controllers/coronaController");
const historyController = require("./app/controllers/historyController");
const journalController = require("./app/controllers/journalController");

// const mds = require("./libs/mds");

routes.get("/", coronaController.index);

// routes.get("/save", async (req, res) => {
//   const response = await mds.save()
//   res.send(response);
// });

routes.get("/journal", journalController.index);
routes.get("/journal/:state", journalController.indexState);

routes.get("/history", historyController.index);
routes.get("/history/:country", historyController.indexCountry);
routes.get("/history/:country/:uid", historyController.indexUid);

routes.get("/:country", coronaController.indexCountry);
routes.get("/:country/:uid", coronaController.indexUid);

routes.use((req, res) => res.status(404).json({ message: "Not found" }));

module.exports = routes;
