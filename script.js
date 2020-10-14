const tiles = document.querySelectorAll('.tile');
const nameTile = document.querySelectorAll('.nameTile');
const hideTile = document.querySelectorAll('.hideTile');
const checkboxes = [...document.querySelectorAll('input[type=checkbox]')];
const internetChceckboxes = tiles[0].querySelectorAll('input[type=checkbox]');
const percent = document.querySelector("div.percent");

// Functions

function showList(e) {
    // Display list item when click name of tile

    const thisList = this.parentNode.children[1];
    thisList.classList.toggle('display')


}


function doneTile(e) {
    const thisTile = e.path[4];
    const thisNameTile = thisTile.children[0];
    const thisHideTile = thisTile.children[1];
    const index = e.target.dataset.index;
    const thisCheckboxes = [...tiles[index - 1].querySelectorAll('input[type=checkbox]')];
    const checkedCheckboxes = [...tiles[index - 1].querySelectorAll('input[type=checkbox]:checked')].length;
    const thisPercent = [...tiles[index - 1].querySelectorAll('.percent')];


    //Add done class to to nameTile if every checkbox is checked

    if (checkedCheckboxes == thisCheckboxes.length) {
        thisNameTile.classList.add('done');
        thisHideTile.classList.remove('display');
    } else {
        thisNameTile.classList.remove('done');
    };
    // Add percent of the bottom of tile
    const percentOfTile = Math.floor((checkedCheckboxes / thisCheckboxes.length) * 100) + '%';

    thisPercent.forEach(p => {
        (checkedCheckboxes > 0) ? p.textContent = percentOfTile: p.textContent = '';
    });



}


//Events
nameTile.forEach(tile => {
    tile.addEventListener('click', showList)
});
checkboxes.forEach(check => {
    check.addEventListener('change', doneTile)
});