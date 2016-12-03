/**
 * Images to display
 */
var images = [
    {title: 'Acquarium',
        jpg: 'image/Aquarium.jpg'},
    {title: 'Autumn',
        jpg: 'image/Autumn.jpg'},
    {title: 'Beach',
        jpg: 'image/Beach.jpg'},
    {title: 'Classic',
        jpg: 'image/ClassicDeck4.jpg'},
    {title: 'Western',
        jpg: 'image/WesternDeck4.jpg'},
    {title: 'Jumbo',
        jpg: 'image/JumboDeck4.jpg'},
    {title: 'Bubbles',
        jpg: 'image/Bubbles.jpg'},
    {title: 'CherryBlossoms',
        jpg: 'image/CherryBlossoms.jpg'},
    {title: 'Fireworks',
        jpg: 'image/Fireworks.jpg'},
    {title: 'Leaves',
        jpg: 'image/Leaves.jpg'},
    {title: 'Start',
        jpg: 'image/Stars.jpg'},
    {title: 'Western',
        jpg: 'image/Western.jpg'}
];

// container for the gallery images
var container = document.getElementById("gallery");

// destination location of the image to be dragged
var toIdx;

/**
 * Handles when the image is about to be dropped
 * @param event - drag/drop event
 */
function allowDrop(evt) {
    evt.preventDefault();
    toIdx = document.getElementById(evt.target.id).attributes[0].nodeValue;
}

/**
 * Handles when the image is starting to be dragged
 * @param event - drag/drop event
 */
function drag(evt) {
    evt.dataTransfer.setData("text", evt.target.id);
}

/**
 * Handles when the image is dropped to a new location
 * @param event - drag/drop event
 */
function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text");
    var fromIdx = document.getElementById(data).attributes[0].nodeValue;
    reorderImages(fromIdx);
 }


/**
 * Reorder images
 * @param fromIdx - original position of the image
 */
function reorderImages(fromIdx) {

    // if the original and the new location is the same, do nothing
    if (fromIdx === toIdx) {
        return;
    }

    images.splice(toIdx, 0, images.splice(fromIdx, 1)[0]);
    setupImages();
}

/**
 * Set up images
 */
function setupImages() {

    container.innerHTML = '';

    for (var i=0; i < images.length; i++) {
        var image = document.createElement('img');
        image.setAttribute('orderIndex', i);
        image.setAttribute('id', 'img_' + i);
        image.setAttribute('class', 'picture');
        image.setAttribute('src', images[i].jpg);
        image.setAttribute('title', images[i].title);
        image.setAttribute('draggable', 'true');
        image.setAttribute('ondragstart', 'drag(event)');
        image.setAttribute('ondrop', 'drop(event)');
        image.setAttribute('ondragover', 'allowDrop(event)');
        container.appendChild(image);

    }
}

// init
setupImages();


