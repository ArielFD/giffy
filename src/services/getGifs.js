const apiKey="Cy6Ao2xQAgEwGdQvb7HfT9Owqqxc9ZC1"

export default function getGifs({keyword='morty'}={}){
    const apiUrl =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    return fetch(apiUrl).then(res=>res.json()).then(response=>{
    const {data=[]}=response
    if(Array.isArray(data)){
        const gifs = data.map(image=>image.images.downsized_medium.url)
        return gifs
    }
  })
}