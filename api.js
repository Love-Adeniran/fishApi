// const endpoint = "https://api.artic.edu/api/v1/artworks/"
// const base = "https://www.artic.edu/iiif/2"
// const size = "/full/843,/0/default.jpg  "
// const test = async()=>{

    // myRequest = Request.mode
    //  console.log(myRequest)

    // let response = await fetch (endpoint)
    // let jsonResponse = await response.json()
    // console.log(jsonResponse.data[0].image_id)

    // jsonResponse.map((item,index)=>{
    //     disp.innerHTML += `<h1> ${item.data} </h1>`
    // })
    // disp.innerText= jsonResponse
// }

const endpoint2 = "https://www.fishwatch.gov/api/species"

    

const test = async()=>{
    const response = await fetch(endpoint2)
    const dataInJson = await response.json()
    // console.log(dataInJson[i]["Image Gallery"][i].src)
    dataInJson.map((item,i)=>{
        let habitat = dataInJson[i].Habitat
        
        let imageSrc = dataInJson[i]["Species Illustration Photo"].src;
        let imageAlt = dataInJson[i]["Species Illustration Photo"].alt;
        let imageTitle = dataInJson[i]["Species Illustration Photo"].title;
        // let Image = [imageSrc, imageAlt,imageTitle]
        // image.innerHTML += `<img src="${imageSrc}" alt="${imageAlt}" title="${imageTitle}" width="50%" height="50%">`
        let quote = dataInJson[i]["Quote"];
        let scientificName = dataInJson[i]["Scientific Name"];
        let speciesName = dataInJson[i]["Species Name"];
        // fishname.innerHTML+= `<h1>Name: ${speciesName}</h1> `
        let healthBenefit = dataInJson[i]["Health Benefits"];
        let source = dataInJson[i]["Source"];
        let location = dataInJson[i]["Location"];
        let lastUpdate = dataInJson[i]["last_update"];
        // console.log(Image)
        disp.innerHTML += `<h1>Name: ${speciesName}</h1> <img src="${imageSrc}" alt="${imageAlt}" title="${imageTitle}" width="50%" height="50%"> <p> Scientific Name: ${scientificName}</p> <p> ${healthBenefit}</p>  <p> Habitat: ${habitat}</p> ${source} ${location} <h5> Quote: ${quote}</h5> <p>Last Update: ${lastUpdate}</p> <hr><br>`
    })
    
   

    
    // dataInJson.map((item,i)=>{
    //     console.log(dataInJson[i])
    //     // console.log(dataInJson[i][Image Gallery]);
    //     let habitat = dataInJson[i].Habitat
    //     console.log(habitat);
    //         disp.innerHTML += `${i}  ${habitat} `
    // })
    
   
}

const search =async(e)=>{
   
    e.preventDefault()
    let userInput = inputsearch.value 
    console.log(userInput)
    const response = await fetch(endpoint2)
    const dataInJson = await response.json()
    let foundFish = dataInJson.find((item)=>(item["Species Name"]== userInput))
    console.log(foundFish)
    // demo.innerHTML = dataInJson.filter((data)=>data == inputsearch.value)
}

