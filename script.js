// Audio Kontekstini oluşturun
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Kullanıcı tarafından girilen metin kutusunu ve düğmeyi seçin
const textInput = document.querySelector('#textInput');
const convertBtn = document.querySelector('#convertBtn');

// Notların tanımlanması
const notes = [
  { note: 'C', frequency: 261.6 },
  { note: 'D', frequency: 293.7 },
  { note: 'E', frequency: 329.6 },
  { note: 'F', frequency: 349.2 },
  { note: 'G', frequency: 392.0 },
  { note: 'A', frequency: 440.0 },
  { note: 'B', frequency: 493.9 }
];

// Dönüştürme fonksiyonunu oluşturun
function convertToMelody(text) {
  const melody = [];

  for (let i = 0; i < text.length; i++) {
    const character = text[i].toUpperCase();
    const note = notes.find(n => n.note === character);

    if (note) {
      melody.push(note.frequency);
    }
  }

  return melody;
}

// Event to be triggered when the Convert button is clicked
convertBtn.addEventListener('click', () => {
  const text = textInput.value;
  const melody = convertToMelody(text);

  // Creating an oscillator from a sound context
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';

  // Assign each note to the oscillator in sequence
  let time = audioCtx.currentTime;
  for (let i = 0; i < melody.length; i++) {
    oscillator.frequency.setValueAtTime(melody[i], time);
    time += 0.5;
  }

  // Finally, set the oscillator to be played and stop it
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(time);
});
