// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.reset-pieces');


// functions
function changeImageSet() {
    console.log('Changing puzzle background and resetting pieces');

    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

    let originalContainer = document.querySelector('.puzzle-pieces');

    dropZones.forEach(zone => {
        while (zone.firstChild) {  
            originalContainer.appendChild(zone.firstChild);
        }
    });
}


function allowDrag(event) {
    console.log('started dragging an image');

    // adds the ID of the element being dragged to the data transfer object
    // as 'draggedEl', so we can get it later
    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragging over a drop zone ');
}

function allowDrop(event) {
    event.preventDefault();

    // Get the dragged element's ID
    let droppedElId = event.dataTransfer.getData('draggedEl');
    let droppedEl = document.querySelector(`#${droppedElId}`);


    if (this.children.length === 0) {
        this.appendChild(droppedEl); 
    } else {
        console.log('This drop zone is already occupied');
    }
}


// event listeners
theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});

