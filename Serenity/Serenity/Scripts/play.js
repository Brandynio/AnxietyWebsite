var audio = document.getElementById('audio');
var currentSong = 0;
var songs = ['music/supermario.mp3', 'music/happytogether.mp3'];

function loadPlaylist() {
    if (currentSong == songs.length) {
        currentSong = 0;
    }
    this.playOptions = audio;
    this.playOptions.src = songs[currentSong];
    this.playOptions.play();
    currentSong++;
}