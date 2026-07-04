// Procedurally generated ambient loops via the Web Audio API — no
// audio files to ship or license, just filtered/shaped noise.

let sharedContext = null

function getContext() {
  if (!sharedContext) {
    sharedContext = new (window.AudioContext || window.webkitAudioContext)()
  }
  if (sharedContext.state === 'suspended') sharedContext.resume()
  return sharedContext
}

function makeNoiseBuffer(context, seconds, tint) {
  const length = Math.floor(context.sampleRate * seconds)
  const buffer = context.createBuffer(1, length, context.sampleRate)
  const data = buffer.getChannelData(0)
  if (tint === 'brown') {
    let last = 0
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.8
    }
  } else {
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1
  }
  return buffer
}

export const SOUND_DEFS = [
  { key: 'rain', label: 'Rain', icon: '🌧️' },
  { key: 'white', label: 'White noise', icon: '📻' },
  { key: 'brown', label: 'Deep rumble', icon: '🌊' },
  { key: 'wind', label: 'Wind', icon: '🍃' },
]

export function createSoundHandle(key, initialVolume = 0.5) {
  const context = getContext()
  const tint = key === 'brown' ? 'brown' : 'white'
  const buffer = makeNoiseBuffer(context, 4, tint)

  const source = context.createBufferSource()
  source.buffer = buffer
  source.loop = true

  const filter = context.createBiquadFilter()
  const gain = context.createGain()
  gain.gain.value = 0

  let lfo = null

  if (key === 'rain') {
    filter.type = 'highpass'
    filter.frequency.value = 900
  } else if (key === 'wind') {
    filter.type = 'lowpass'
    filter.frequency.value = 500
    lfo = context.createOscillator()
    lfo.frequency.value = 0.15
    const lfoGain = context.createGain()
    lfoGain.gain.value = 220
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)
    lfo.start()
  } else if (key === 'brown') {
    filter.type = 'lowpass'
    filter.frequency.value = 400
  } else {
    filter.type = 'allpass'
    filter.frequency.value = 1000
  }

  source.connect(filter)
  filter.connect(gain)
  gain.connect(context.destination)
  source.start()

  const now = context.currentTime
  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(initialVolume, now + 0.6)

  return {
    setVolume(v) {
      gain.gain.linearRampToValueAtTime(v, context.currentTime + 0.15)
    },
    stop() {
      const t = context.currentTime
      gain.gain.linearRampToValueAtTime(0, t + 0.4)
      setTimeout(() => {
        source.stop()
        lfo?.stop()
      }, 450)
    },
  }
}
