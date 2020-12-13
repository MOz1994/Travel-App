//Get weather from API
const getWeather = async(lat, lng, wKey, dDate) => {
    
    let edate = dDate + 1;
    let baseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=' + lat + '&lon=' + lng + '&start_date=' + dDate + '&end_date=' + edate + '&key=' + wKey;
    console.log(baseURL)
    const request = await fetch(baseURL);
    try {
        const data = await request.json();
        //get the tempreture from API
        const maxT = data.data[0].max_temp;
        const minT = data.data[0].min_temp;
        return ("High " + maxT + ', Low ' + minT)

    } catch (error) {
        console.log('error', error);
    }

}
export { getWeather }