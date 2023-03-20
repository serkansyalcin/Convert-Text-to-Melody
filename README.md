# Convert Text To Melody - Web App
## Bu uygulamada, AudioContext öğesi oluşturularak, kullanıcının girdiği metni melodiye dönüştürmek için convertToMelody adlı bir fonksiyon yazılmıştır. Bu fonksiyon, metindeki her karakterin bir nota frekansına dönüştürülmesini sağlar. convertBtn öğesine bir olay dinleyicisi eklenerek, kullanıcının girdiği metin alınır ve bu metin convertToMelody fonksiyonuyla dönüştürülür. Daha sonra oluşturulan melodideki her frekans, ses kontekstinde bir osilatöre atanır ve osilatör çalınır. Son olarak, stop() yöntemi çağrılarak osilatör durdurulur.

## Böylece, bu kodu kullanarak, kullanıcının girdiği metni melodik bir ses dönüştürebilirsiniz.

## Review - https://convert-text-to-melody.vercel.app/
