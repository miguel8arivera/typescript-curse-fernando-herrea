(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currentAudio = AudioLevel.min;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
