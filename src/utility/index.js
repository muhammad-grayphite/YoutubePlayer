import { baseUrl } from "./server";
import { SECRET } from "./secret";

export const fetchVideos =(obj) => {
   let url=''
  if(obj.nextPageToken){
     url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=programming&key=${SECRET}&pageToken=${obj.nextPageToken}`
  }else{
    url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=songs&key=${SECRET}`
  }
    return new Promise((resolve, reject) => {
        fetch(url,{
            method: 'GET',
        }).then((response) => response.json())
            .then((json) => {
                resolve(json)
            })
            .catch((error) => {
                reject(error)
                console.error(error);
            });
    })
}


export const fetchVideoById =(id) => {
    let url = `${baseUrl}videos?part=snippet,statistics&key=${SECRET}&id=${id}`

    console.log(url)

   
     return new Promise((resolve, reject) => {
         fetch(url,{
             method: 'GET',
         }).then((response) => response.json())
             .then((json) => {
                console.log(json)
                 resolve(json)
             })
             .catch((error) => {
                 reject(error)
                 console.error(error);
             });
     })
 }