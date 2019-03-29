let SpeechRecognition = webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'fr-FR';

recognition.onresult = function(event) {
    console.log("Got result ended.");
    console.log(event);
    let last = event.results.length - 1;
    let transcript = event.results[last][0].transcript;
    console.log(transcript);
};

recognition.onspeechend = function(event) {
    console.log("Speech ended.");
    console.log(event);
    recognition.stop();
};

recognition.onspeechstart = function(event) {
    console.log("Speech started.");
    console.log(event);
};

recognition.start();

console.log("Speech recognition started.");
console.log(recognition);
