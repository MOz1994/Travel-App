



function performAction(event) {
    
    event.preventDefault()

    getInfo().then(function(data) {

    });
}

const getInfo = async() => {
    
    let cityTxt = document.getElementById('city').value
    let dDate = document.getElementById('date').value
    //take the user returning date to calculate number of trip days. 
    let rDate = document.getElementById('Edate').value

    const request = await fetch('http://localhost:3000/username');

    try {
        const allData = await request.json();
        const keyWeather = allData.wKey;
        const keyPic = allData.pKey;
        const userName = allData.userName;
        let baseURL = 'http://api.geonames.org/searchJSON?q=' + cityTxt + '&maxRows=1&username='+userName ;
        const res = await fetch(baseURL);
        try {
            const data = await res.json();
            const country = data.geonames[0].countryName;
            const lat = data.geonames[0].lat;
            const lng = data.geonames[0].lng;

            await Client.postData('http://localhost:3000/wData', {
                    city: cityTxt,
                    countryName: country,
                    //function to get Pic from pixabay API 
                    pic: await Client.getPic(cityTxt, country, keyPic),
                    //function to get get weather from weatherbit API
                    temp: await Client.getWeather(lat, lng, keyWeather, dDate),
                    //function to get number of days 
                    countDay: await calDays(dDate, rDate)

                })
                .then(
                    //wait 500 ms then update user interface with the result
                    await wait(500),
                    await updateUI(dDate)
                )
        } catch (error) {
            console.log('error', error);
        }
    } catch (error) {
        console.log('error', error);

    }

};
// wait ms milliseconds
function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
const calDays = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0

    while (start < end) {
        dayCount++
        start.setDate(start.getDate() + 1)
    }

    return dayCount
}

//Update the html dom
const updateUI = async(dDate) => {
    const request = await fetch('http://localhost:3000/all');
    try {
      
        const allData = await request.json();
      
        let i = (allData.length-1 );
        let city=  allData[i].city;
        let country=  allData[i].countryName;
        let nDays= allData[i].cDate;
        let temp=  allData[i].temp;
        let pic= allData[i].pic;
        let element = document.getElementById("img");
        element.classList.add("imgCity");
        document.getElementById('cityC').innerHTML = " My Trip to: " + city + ", " +country;
        document.getElementById('dateD').innerHTML = "Departing: " + (dDate) + ", the trip will last " +nDays  + " days";
        document.getElementById('temp').innerHTML = "Typical weather for then is: " +temp;

        document.getElementById('img').style.backgroundImage = "url('" + pic + "')";



    } catch (error) {
        console.log("error", error);
    }
}


export { performAction }