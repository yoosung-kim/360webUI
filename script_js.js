var video = document.querySelector("#videoElement");
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        video.srcObject = stream;
    })
    .catch(function (err0r) {
        console.log("Something went wrong!");
    })
}

var btn = document.getElementById('submit1');
btn.addEventListener('click', function(){
    //클릭시에 할 일
    btn.style.color = 'red';
})

var btn = document.getElementById('submit2');
btn.addEventListener('click', function(){
    //클릭시에 할 일
    btn.style.color = 'red';
})

var btn = document.getElementById('submit3');
btn.addEventListener('click', function(){
    //클릭시에 할 일
    btn.style.color = 'red';
})

