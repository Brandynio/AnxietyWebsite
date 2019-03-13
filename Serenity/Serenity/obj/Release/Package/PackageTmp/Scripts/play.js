var audio = document.getElementById('audio');
var currentSong = 0;
var songs = ['/Content/music/bensound-love.mp3', '/Content/music/bensound-memories.mp3', '/Content/music/bensound-slowmotion.mp3', '/Content/music/bensound-tenderness.mp3', '/Content/music/bensound-thelounge.mp3', '/Content/music/bensound-tomorrow.mp3', '/Content/music/bensound-betterdays.mp3'];

function loadPlaylist() {
    if (currentSong == songs.length) {
        currentSong = 0;
    }
    this.playOptions = audio;
    this.playOptions.src = songs[currentSong];
    this.playOptions.play();
    currentSong++;
}