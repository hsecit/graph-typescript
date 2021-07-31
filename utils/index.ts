import fs from 'fs'
import cheerio from 'cheerio'



const TABLE_SELECTOR = '#mw-content-text > div.mw-parser-output > table:nth-child(16) > tbody > tr'
const loadHtml = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

const scrapTojson = () => {
    loadHtml('./utils/cities.html').then(res => {
        let html = res.toString()
        let $ = cheerio.load(html)

        let cities_morroco = []

        const table = $(TABLE_SELECTOR)
        table.each((i, el) => {
            const id: number = parseInt($(el).find(' td:nth-child(1)').text())
            const city: string = $(el).find(' td:nth-child(2) > a').text()
            const population = $(el).find(' td:nth-child(3)').text()
            const region = $(el).find(' td:nth-child(5) > a').text()
            let city_info = {
                id: id,
                name: city,
                population: population,
                region: region
            }
            cities_morroco.push(city_info)

        })

        fs.writeFile('./utils/cities.json', JSON.stringify(cities_morroco), (err) => {
            console.error(err);

        })
    }).catch(err => {
        console.error(err);

    })
}


// types
type City = {
    region: string
    cities: any[]
}
type Ville = {
    name: string
    population: number
    region?: string
}
fs.readFile('./utils/cities.json', (err, data) => {
    let cities = JSON.parse(data.toString())
    let visited_city = []
    let visited_region = []
    let result = []
    cities.forEach((city:Ville) => {
        if (!visited_region.includes(city.region)) {
            let cities_byregion: City = {
                region: city.region,
                cities: new Array<any>()
            }

            cities.forEach((ville: Ville) => {
                if (!visited_city.includes(ville.name)) {
                    if (city.region === ville.region) {
                        let new_city = {
                            name: ville.name,
                            population: ville.population
                        }
                        cities_byregion.cities = [...cities_byregion.cities, new_city]
                        visited_city.push(ville.name)

                    }
                }
            })
            result.push(cities_byregion)
            visited_region.push(city.region)
        }
    })

    console.log(
        result[1].cities
    );
    


})


