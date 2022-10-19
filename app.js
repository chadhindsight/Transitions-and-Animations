const element = document.querySelector('.btn');

// When button element var gets clicked, the target el gets transition styles applied.
element.onclick = () => {
    console.log(document.querySelector('button'))
    document.querySelector('.box').className = 'transition'
}