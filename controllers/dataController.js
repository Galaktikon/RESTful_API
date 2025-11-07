const CityData = require('../modules/dataModel');

// CRUD operations
exports.createEntry = async (req, res) => {
    try {
        const entry = new CityData(req.body);
        await entry.save();
        res.ststus(201).json(entry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllEntries = async (req, res) => {
    const entries = await CityData.find();
    res.json(entries);
};

exports.getEntryById = async (req, res) => {
    const entry = await CityData.findId(req.params.id);
    res.json(entry);
};

exports.updateEntry = async (req, res) => {
    const updated = await CityData.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updated);
};

exports.deleteEntry = async (req, res) => {
    await CityData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted'});
};

//Question endpoints
exports.getFastestGrowingCity = async (req, res) => {
    const city = await CityData.findOne().sort({ growthRate: -1 });
    res.json({
        question: 'What is the fastest growing city?',
        answer: city.city
    });
};