const client = require("../db/conn");

const getData = async () => {
  try {
    const data = await client
      .db("BlackCoffer")
      .collection("News")
      .find({})
      .toArray();
    return data;
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const apiCtrl = {
  getAllData: async (req, res) => {
    try {
        const data = await getData();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
  },
  getIntensities: async (req, res) => {
    try {
      const data = await getData();
      let intensities = [];
      data.map((item) => intensities.push(item.intensity));
      return res.status(200).send(intensities);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getEndYear: async (req, res) => {
    try {
      const data = await getData();
      let endyear = [];
      data.map((item) => intensities.push(item.end_year));
      return res.status(200).send(endyear);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSector: async (req, res) => {
    try {
      const data = await getData();
      let Sector = [];
      data.map((item) => Sector.push(item.sector));
      return res.status(200).send(Sector);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getTopic: async (req, res) => {
    try {
      const data = await getData();
      let Topic = [];
      data.map((item) => Topic.push(item.topic));
      return res.status(200).send(Topic);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getInsight: async (req, res) => {
    try {
      const data = await getData();
      let Insight = [];
      data.map((item) => Insight.push(item.insight));
      return res.status(200).send(Insight);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getStartYear: async (req, res) => {
    try {
      const data = await getData();
      let StartYear = [];
      data.map((item) => StartYear.push(item.start_year));
      return res.status(200).send(StartYear);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getImpact: async (req, res) => {
    try {
      const data = await getData();
      let Impact = [];
      data.map((item) => Impact.push(item.impact));
      return res.status(200).send(Impact);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getCountry: async (req, res) => {
    try {
      const data = await getData();
      let country = [];
      data.map((item) => country.push(item.country));
      return res.status(200).send(country);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getRelevance: async (req, res) => {
    try {
      const data = await getData();
      let relevance = [];
      data.map((item) => relevance.push(item.relevance));
      return res.status(200).send(relevance);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getPestle: async (req, res) => {
    try {
      const data = await getData();
      let pestle = [];
      data.map((item) => pestle.push(item.pestle));
      return res.status(200).send(pestle);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSource: async (req, res) => {
    try {
      const data = await getData();
      let source = [];
      data.map((item) => source.push(item.source));
      return res.status(200).send(source);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getLikelihood: async (req, res) => {
    try {
      const data = await getData();
      let likelihood = [];
      data.map((item) => likelihood.push(item.likelihood));
      return res.status(200).send(likelihood);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = apiCtrl;
