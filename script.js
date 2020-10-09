const tiles = document.querySelectorAll('.tile');
const nameTile = document.querySelectorAll('.nameTile');
const hideTile = document.querySelectorAll('.hideTile');
const checkboxes = [...document.querySelectorAll('input[type=checkbox]')];
const internetChceckboxes = tiles[0].querySelectorAll('input[type=checkbox]');



function showList(e) {
    const thisList = this.parentNode.children[1];
    thisList.classList.toggle('display')


}
let i = 0;

function doneTile(e) {
    const thisTile = e.target.parentNode.parentNode.parentNode.parentNode;

    const thisNameTile = thisTile.children[0];
    const index = e.target.dataset.index;
    const thisCheckboxes = [...tiles[index - 1].querySelectorAll('input[type=checkbox]')];
    const checkedCheckboxes = [...tiles[index - 1].querySelectorAll('input[type=checkbox]:checked')].length;

    // console.log(thisTile, thisNameTile, index, thisCheckboxes, thisCheckboxes.length, thisCheckboxes.checked);
    // console.log(thisCheckboxes, checkedCheckboxes);



    if (checkedCheckboxes == thisCheckboxes.length) {
        thisNameTile.classList.add('done');
    } else {
        thisNameTile.classList.remove('done');
    };

    const percentOfTile = Math.floor((checkedCheckboxes / thisCheckboxes.length) * 100);
    if (checkedCheckboxes > 0) {

        nameTile.textContent = +`${percentOfTile}%`;
    }

}





nameTile.forEach(tile => {
    tile.addEventListener('click', showList)
});
checkboxes.forEach(check => {
    check.addEventListener('change', doneTile)
});