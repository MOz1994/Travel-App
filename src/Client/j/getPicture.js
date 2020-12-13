 //get picture from API
 const getPic = async(city, country, pixKey) => {
     let baseURL = 'https://pixabay.com/api/?key=' + pixKey + '&q=' + city + '+' + country + '+landscape&image_type=photo';
     const request = await fetch(baseURL);
     try {
         const data = await request.json();
         //if there was no picture search with country
         if (data.total == 0) {
             let baseURL = 'https://pixabay.com/api/?key=' + pixKey + '&q=' + country + '+landscape&image_type=photo';
             const request = await fetch(baseURL);
             const data = await request.json();
             //if there was no picture return message
             if (data.total == 0) {
                 return 'Sorry, there is no pic right now'
             } else {
                 const picUrl = data.hits[0].largeImageURL;
                 return picUrl;
             }
         } else {
             const picUrl = data.hits[0].largeImageURL;
             return picUrl;
         }



     } catch (error) {
         console.log('error', error);
     }

 }
 export { getPic }