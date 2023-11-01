// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

// default pan set to 0 - center
const stereoNode = new StereoPannerNode(audioContext, { pan: 0 });

track.connect(stereoNode).connect(audioContext.destination);
console.log("testing")


function setPan(value)
{
    audioElement.play();
    stereoNode.pan.value = value;
}