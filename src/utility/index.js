import { baseUrl } from "./server";
import { SECRET } from "./secret";

export const fetchVideos = (obj) => {
    let url = '';
    if (obj.nextPageToken) {
        url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=programming&key=${SECRET}&pageToken=${obj.nextPageToken}`
    } else {
        url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=songs&key=${SECRET}`
    }
    return new Promise((resolve, reject) => {
        fetch(url, { method: 'GET', })
            .then((response) => response.json())
            .then((json) => { resolve(json) })
            .catch((error) => {
                reject(error);
                console.error(error);
            });
    });
};

export const fetchVideoById = (id) => {
    let url = `${baseUrl}videos?part=snippet,statistics&key=${SECRET}&id=${id}`;
    return new Promise((resolve, reject) => {
        fetch(url, { method: 'GET', })
            .then((response) => response.json())
            .then((json) => { resolve(json) })
            .catch((error) => {
                reject(error)
                console.error(error);
            });
    });
};

export const getSearchData = (obj) => {
    let url = '';
    if (obj.nextPageToken) {
        url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=${obj.value}&key=${SECRET}&pageToken=${obj.nextPageToken}`;
    } else {
        url = `${baseUrl}search?part=snippet&type=video&maxResults=50&q=${obj.value}&key=${SECRET}`;
    }
    return new Promise((resolve, reject) => {
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => { resolve(json) })
            .catch((error) => {
                reject(error)
                console.error(error);
            });
    });
};

export const getVideoComments = (obj) => {
    let url = '';
    if (obj.nextPageToken) {
        url = `${baseUrl}commentThreads?part=snippet&maxResults=50&textFormat=plainText&key=${SECRET}&pageToken=${obj.nextPageToken}&videoId=${obj.vid}&type=video`;
    } else {
        url = `${baseUrl}commentThreads?part=snippet&maxResults=50&textFormat=plainText&key=${SECRET}&videoId=${obj.vid}&type=video`;
    }
    return new Promise((resolve, reject) => {
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => { resolve(json) })
            .catch((error) => {
                reject(error)
                console.error(error);
            });
    });
};