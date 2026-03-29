// Challenge 1: Patient Identity Disambiguation
function calculateParity(patient) {
  const vitalSum = patient.heartRate + patient.oxygenLevel 
                   + patient.temperature + patient.bloodPressure;
  const parity = vitalSum % 2 === 0 ? 'EVEN' : 'ODD';
  return parity;
}

// Challenge 2: Medication Name Decryption
function decryptMedication(encryptedName, patientAge) {
  const shift = patientAge % 26;
  return encryptedName.split('').map(char => {
    if (!char.match(/[a-z]/i)) return char;
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base - shift + 26) % 26) + base
    );
  }).join('');
}

// Helper to encrypt for mock data generation
function encryptMedication(decryptedName, patientAge) {
  const shift = patientAge % 26;
  return decryptedName.split('').map(char => {
    if (!char.match(/[a-z]/i)) return char;
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift + 26) % 26) + base
    );
  }).join('');
}

// Challenge 3: Sensor Data Interpolation
function interpolate(readings) {
  // Readings is an array like [78, null, null, 90, 96]
  const result = [...readings];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === null) {
      let prevIndex = i - 1;
      while (prevIndex >= 0 && result[prevIndex] === null) prevIndex--;
      
      let nextIndex = i + 1;
      while (nextIndex < result.length && result[nextIndex] === null) nextIndex++;
      
      // If we don't have bounds, use generic safe values or fallback to previous
      if (prevIndex < 0 || nextIndex >= result.length) {
        result[i] = prevIndex >= 0 ? result[prevIndex] : (nextIndex < result.length ? result[nextIndex] : 80);
      } else {
        const y1 = result[prevIndex];
        const y2 = result[nextIndex];
        result[i] = Math.round(y1 + (i - prevIndex) * (y2 - y1) / (nextIndex - prevIndex));
      }
    }
  }
  return result;
}

// Challenge 4: Real-Time Alert System
function checkVitals(vitals, thresholds) {
  if (vitals.heartRate < thresholds.minBPM) {
    return { severity: 'CRITICAL', message: `Heart rate critically low: ${vitals.heartRate} BPM` };
  }
  if (vitals.heartRate > thresholds.maxBPM) {
    return { severity: 'CRITICAL', message: `Heart rate critically high: ${vitals.heartRate} BPM` };
  }
  if (vitals.oxygenLevel < thresholds.minO2) {
    return { severity: 'WARNING', message: `Oxygen level low: ${vitals.oxygenLevel}%` };
  }
  return { severity: 'NORMAL', message: `Vitals stable` };
}
