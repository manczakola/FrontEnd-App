const nameTile = document.querySelectorAll('.nameTile');
const hideTile = document.querySelectorAll('.hideTile');
const checkboxes = [...document.querySelectorAll('input[type=checkbox]')];


function showList(e) {
    const thisList = this.parentNode.children[1];
    thisList.classList.toggle('display')


}
let i = 0;

function doneTile(e) {
    if (e.target.checked) {
        i++
    } else {
        i--
    }
    console.log(i);
    const thisNameTile = this.parentNode.parentNode.parentNode.parentNode.children[0];
    if (i === checkboxes.length) {
        thisNameTile.classList.add('done');

    } else if (i < checkboxes.length) {
        thisNameTile.classList.remove('done');
    }

}




nameTile.forEach(tile => {
    tile.addEventListener('click', showList)
});
checkboxes.forEach(check => {
    check.addEventListener('change', doneTile)
})