const express = require('express');
const router = express.Router();
const {
    createEntry,
    getAllEntries,
    getEntryById,
    updateEntry,
    deleteEntry,
    getFastestGrowingCity,
    getAverageAge,
    // Add other question endpoints here

} = require('../controllers/dataController');

// CRUD routes
router.post('/data', createEntry);
router.get('/data', getAllEntries);
router.get('data/:id', getEntryById);
router.put('/data/:id', updateEntry);
router.delete('/data/:id', deleteEntry);

//Question endpoints
router.get('/questions/fastest-growing-city', getFastestGrowingCity);
router.get('questions/average-age', getAverageAge);

module.exports = router;
