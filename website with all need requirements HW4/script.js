function toggleDropdown() {
    var dropdown = document.getElementById('albumDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function showContent(albumId) {
    var albums = document.getElementsByClassName('album-content');
    for (var i = 0; i < albums.length; i++) {
        albums[i].style.display = 'none';
    }
    document.getElementById(albumId).style.display = 'block';
}
