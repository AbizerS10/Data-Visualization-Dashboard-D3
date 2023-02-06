require("./db/conn");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const apiCtrl = require("./controllers/apiController");

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());


// Routes
app.get('/api/all_data', apiCtrl.getAllData);
app.get('/api/intensities', apiCtrl.getIntensities);
app.get('/api/end_year', apiCtrl.getEndYear);
app.get('/api/country', apiCtrl.getCountry);
app.get('/api/impact', apiCtrl.getImpact);
app.get('/api/insight', apiCtrl.getInsight);
app.get('/api/likelihood', apiCtrl.getLikelihood);
app.get('/api/pestle', apiCtrl.getPestle);
app.get('/api/relevance', apiCtrl.getRelevance);
app.get('/api/sector', apiCtrl.getSector);
app.get('/api/source', apiCtrl.getSource);
app.get('/api/start_year', apiCtrl.getStartYear);
app.get('/api/topic', apiCtrl.getTopic);

app.listen(port, () => {
  console.log("app listening at " + port);
});
