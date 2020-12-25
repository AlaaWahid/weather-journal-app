/* Global Variables */
  // to convert temp to celsius added (&units=metric)
const specialKey = '&appid=5de4ef3461c6ade1f5a84039dc2cdfa8&units=metric';
const urlProject = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const generatorBtn = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
// added (1) due to months (january to december) start from (0 to 11 )
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


  // Event Listener to add function when we click button (generate)
  generatorBtn.addEventListener('click',funcGenerate);
  // function called by Event Listener
function funcGenerate() {
        // get values of user input (zip, feelings)
    const zipCity = document.querySelector('#zip').value;
    const userFeeling = document.querySelector('#feelings').value;
     // alert for user when didn't enter zip code
    if (zipCity ==''){
       alert('enter your zip code')}
       getCityInfo(urlProject,zipCity,specialKey)
    // call post function that return data to server
  .then(function(Info){
    console.log(Info);
       // temp inside main variable
    postInfo('/userData', {date:newDate, content:userFeeling, temp:Info.main.temp})
      // call updateUI that take data from server to appear to user
    updateUI();
})
}

   // function to GET Web API Data
const getCityInfo = async(specialKey,urlProject,zipCity) => {
       // fetch API data
    const reply = await fetch(specialKey+urlProject+zipCity)
    try {
          // convert from json
        const newInfo = await reply.json();
        return newInfo;
      }
    catch(error){
         // handle the error
        console.log('error',error)}
    }

    // function to POST data to server
const postInfo = async (url='', Info={}) => {
    const repo = await fetch(url, {
        method:'POST',
        credentails: 'same-origin',
        headers: {'Content-Type': 'application/json'},
          // convert to json to send to server
        body: JSON.stringify(Info)
    })
    try {
        const modernInfo = await repo.json();
        return modernInfo;
      }
    catch(error){
        console.log('error',error)
    }
}

  // function to GET data and appear to user
const updateUI = async () => {
    const demand = await fetch('/personInfo');
    try{
         //Tranform into json
        const totalInfo = await demand.json();
            // data appear to user
        document.querySelector('#date').innerHTML = `Date is: ${totalInfo[0].date}`
        document.querySelector('#temp').innerHTML = `Temperature is: ${totalInfo[0].temp}`;
        document.querySelector('#content').innerHTML = `I feel ${totalInfo[0].content}`
    }
    catch(error){
        console.log('error',error)}
}