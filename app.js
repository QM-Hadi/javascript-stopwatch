var hours = document.getElementById("hours")
var minutes = document.getElementById("mins")
var seconds = document.getElementById("sec")

var updated = setInterval(function () {
    var date = new Date()
    hours.innerText = date.getHours()
    minutes.innerText = ":" +date.getMinutes()
    seconds.innerText =":" +date.getSeconds()

}, 1000)
function lastbtn(){
    // var updatedbtn = new Date()
    clearInterval(updated)
    
}