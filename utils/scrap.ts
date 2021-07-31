import axios from "axios";
import cheerio from 'cheerio';


let url = 'https://simple.wikipedia.org/wiki/List_of_cities_in_Morocco'
axios.get(url).then(res => {
    let html = res.data
    let $ = cheerio.load(html)

    const tbody = $('#mw-content-text > div.mw-parser-output > table:nth-child(16) > tbody')

    console.log(tbody);
    
    
})