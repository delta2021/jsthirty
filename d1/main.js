new Vue({
    el: '#app',
    data: {
        sounds: [{sound:'CLAP', key: 'A', fileName: 'clap.wav'}, {sound: 'HIHAT', key: 'S', fileName: 'hihat.wav'}, 
        {sound: 'KICK', key: 'D', fileName: 'kick.wav'}, {sound: 'OPENHAT', key: 'F', fileName: 'openhat.wav'}, 
        {sound: 'BOOM', key: 'G', fileName: 'boom.wav'}, {sound: 'RIDE', key: 'H', fileName: 'ride.wav'}, {sound: 'SANRE',key: 'J',
        fileName: 'snare.wav'}, {sound: 'TOM', key: 'K', fileName: 'tom.wav'}, {sound: 'TINK', key: 'L', fileName: 'tink.wav'}],
    },
    mounted: function(){
        const vm = this;
        window.addEventListener('keydown', (e) => {
            let key = String.fromCharCode(e.keyCode).toLocaleLowerCase();
            let soundId = '#audio-' + key;
            let keyId = '#key-' + key;
            vm.playSound(soundId);   
            vm.animateKey(keyId);
        })
    },
    methods: {
        getSoundsUrl(fileName){
            return `sounds/${fileName}`
        },

        audioId(sound){
            return 'audio-' + sound.toLowerCase();
        },

        keyId(sound){
            return 'key-' + sound.toLowerCase();
        },

        playSound(soundId){
            document.querySelector(soundId).play();
        },

        animateKey(keyId) {
            let key = document.querySelector(keyId)
            key.classList.add('playing');
            setTimeout(()=> {
                key.classList.remove('playing');
            }, 100)
        },

        drumClick(e){
            let keyId = '#' + e.currentTarget.id; 
            let soundId = '#audio-' + e.currentTarget.id[e.currentTarget.id.length-1];
            this.playSound(soundId);
            this.animateKey(keyId);
        }
    }
})


