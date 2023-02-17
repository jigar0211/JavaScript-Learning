document.getElementById('button').addEventListener('click', event => {
    if(event.target.className === 'buttonclass'){
        console.log('Button Clicked!')
    }
});