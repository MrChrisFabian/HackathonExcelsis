const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT;

const ROUTES = require("../server/routes/weather.routes");
app.use("/weather", ROUTES);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
