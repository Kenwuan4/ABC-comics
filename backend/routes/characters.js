var express = require('express');
var router = express.Router();
require('dotenv').config();
const apiKey = process.env.API_KEY;

router.get('/', async(req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 20; 
        const offset = (page - 1) * limit; 
        console.log(process.env.API_KEY);
        const apiUrl = `https://comicvine.gamespot.com/api/characters?api_key=${apiKey}&format=json&limit=${limit}&offset=${offset}`;
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
    
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching data' });
      }

  });

  router.get('/character/:id', async(req, res) => {

    try {
        const apiUrl = `https://comicvine.gamespot.com/api/character/4005-${req.params.id}/?api_key=${apiKey}&format=json`;
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
    
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching data' });
      }

  });


  module.exports = router;