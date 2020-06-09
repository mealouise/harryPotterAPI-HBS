const fetch = require("node-fetch");

const url = ``

const getHouses = async(house) => {
    let data = await fetch(`https://www.potterapi.com/v1/houses?key=${process.env.KEY}`);

    let JSONobj = await data.json(house);
    return JSONobj;
}

module.exports = getHouses;