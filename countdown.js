const enddate = "2 July  2025 12:50 PM"

document.getElementById("end-Date").innerText=enddate;
const inputs = document.querySelectorAll("input")

// const clock = () =>{

// }

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now)/1000; // milisecond convert into seconds
    // console.log(diff)
    // console.log(Math.floor(diff/3600/24)) // showing the difference sec or hr = divide
    inputs[0].value = Math.floor(diff/3600/24) //==days
    inputs[1].value = Math.floor((diff/3600)%24) //=hr
    inputs[2].value = Math.floor((diff/60)%60) //=min
    inputs[3].value = Math.floor(diff%60) //=sec 
     
    // convert into days

}   

//initial call
clock()


/*
1 day = 24 hr
1 hour = 60 mint
60 min = 3600 sec 
*/
setInterval(() => {
    clock();
}, 1000);

// setInterval {
//     () => {
//         clock()
//     },
//     1000
// } 
