import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRCodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  useEffect(() => {
    // Handle the scanned data (e.g., display it, navigate to another screen, etc.)
    if (scannedData) {
      // You can customize how to display the scanned data in your UI
      // For simplicity, displaying it in a Text component here
      alert(`Scanned Data: ${scannedData}`);
    }
  }, [scannedData]);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={handleBarCodeScanned}
        captureAudio={false}
      />
      <View style={styles.overlay}>
        {scanned && (
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={() => {
              setScanned(false);
              setScannedData(null);
            }}
          >
            <Text style={styles.scanAgainText}>Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanAgainButton: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  scanAgainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default QRCodeScanner;
