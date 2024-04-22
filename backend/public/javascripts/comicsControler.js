const fetch = require('node-fetch');

async function getComics(){
    const apiKey = "153802b1813451c45983fe2cf0c28ef72163036d";
    const response = await fetch('https://comicvine.gamespot.com/characters/', {
    method: 'get',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json','Authorization': `Bearer ${apiKey}`}
    });
    const data = await response.json();
    return data;
}




