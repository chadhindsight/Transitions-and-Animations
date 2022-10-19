const element = document.querySelector('.btn');

element.onclick = () => {
    console.log(document.querySelector('button'))
    document.querySelector('.box').className = 'transition'
}