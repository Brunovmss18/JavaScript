/*var fiat = {
    make: 'fiat',
    starded: false, 
    start: function() {
        this.starded = true;
    },
    stop: function() {
        this.starded = false;
    },
    drive: function() {
        if (this.starded) {
            console.log('Zoom zoom!');
        } else {
            console.log('You need to start the engine first.');
        }
    }
}

fiat.start()
fiat.drive()
fiat.stop()
fiat.drive()*/

var song = {
    name: 'Walk This Way',
    artist: 'Run-D.M.C.',
    minute: 4,
    seconds: 3,
    genre: '80s',
    playing: false,
    play: function() {
        this.playing = true;
        console.log(`Playing ${this.name} by ${this.artist}`);
    },
    pause: function() {
        this.playing = false;
        if (this.playing == false) {
            console.log('ligue primeiro')
        }
    }
};


song.pause();

