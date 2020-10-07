const nameTile = document.querySelectorAll('.nameTile');
const hideTile = document.querySelectorAll('.hideTile');

function showList(e) {
    const thisList = this.parentNode.children[1];
    thisList.classList.toggle('display')


}

nameTile.forEach(tile => {
    tile.addEventListener('click', showList)
})