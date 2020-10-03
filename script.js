const nameTile = document.querySelectorAll('.nameTile');
const hideTile = document.querySelectorAll('.hideTile');

function showList(e) {
    const tile = this.parentNode.children[1];
    tile.classList.toggle('display')
}

nameTile.forEach(tile => {
    tile.addEventListener('click', showList)
})