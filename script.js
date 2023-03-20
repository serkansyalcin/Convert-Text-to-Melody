// Audio Kontekstini oluşturun
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Kullanıcı tarafından girilen metin kutusunu ve düğmeyi seçin
const textInput = document.querySelector('#textInput');
const convertBtn = document.querySelector('#convertBtn');

// Notların tanımlanması
const notes = [
  { note: 'C4', frequency: 261.6 },
  { note: 'D4', frequency: 293.7 },
  { note: 'E4', frequency: 329.6 },
  { note: 'F4', frequency: 349.2 },
  { note: 'G4', frequency: 392.0 },
  { note: 'A4', frequency: 440.0 },
  { note: 'B4', frequency: 493.9 }
];

// Dönüştürme fonksiyonunu oluşturun
function convertToMelody(text) {
  const melody = [];

  for (let i = 0; i < text.length; i++) {
    const character = text[i].toUpperCase();
    const note = notes.find(n => n.note[0] === character);

    if (note) {
      melody.push(note.frequency);
    }
  }

  return melody;
}


// Dönüştür düğmesine tıklandığında tetiklenecek olayı ekle
convertBtn.addEventListener('click', () => {
  const text = textInput.value;
  const melody = convertToMelody(text);

  // Melodi notasını göstermek için div öğesini seçin ve içeriğini sıfırlayın
  const melodyNote = document.querySelector('#melodyNote');
  melodyNote.innerHTML = '';

  // Melodinin notasını div öğesine yazdırın
  for (let i = 0; i < melody.length; i++) {
    const note = notes.find(n => n.frequency === melody[i]);
    if (note) {
      melodyNote.innerHTML += note.note + ' ';
    }
  }

  // Ses kontekstinden bir osilatör oluşturun
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';

  // Osilatöre sırayla her notayı atayın
  let time = audioCtx.currentTime;
  for (let i = 0; i < melody.length; i++) {
    oscillator.frequency.setValueAtTime(melody[i], time);
    time += 0.5;
  }

  // Son olarak, osilatörü çalınacak hale getirin ve durdurun
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(time);
});
