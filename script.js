const convertBtn = document.querySelector('#convertBtn');
const textInput = document.querySelector('#textInput');
const audioPlayer = document.querySelector('#audioPlayer');

convertBtn.addEventListener('click', () => {
  // Get the text entered by the user
  const text = textInput.value;

  // To convert text to a melody, you can perform an operation here
  // For example, you can take the ASCII code of each character and assign a note accordingly

  // A simple example
  const notes = text.split('').map(char => char.charCodeAt(0));

  // Create a midi file by combining notes
  const midi = new MidiWriter.Writer([new MidiWriter.Track().addEvent(new MidiWriter.NoteEvent({pitch: notes, duration: '4'}))]);

  // Convert the midi file to a URL and set it as the source of the audio player
  const audioURL = 'data:audio/midi;base64,' + btoa(midi.build());
  audioPlayer.src = audioURL;
});
