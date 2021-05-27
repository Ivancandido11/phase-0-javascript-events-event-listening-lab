function addingEventListener() {
    const divFive = document.querySelector("body > div:nth-child(5) > div > div > div > div")
    divFive.id = "five"
    function clickAlert() {
        alert('I was clicked!');
    }
    five.addEventListener('click', clickAlert)
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    }); 
}
addingEventListener()