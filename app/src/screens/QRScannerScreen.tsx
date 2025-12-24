import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { qrScannerStyles } from '../styles/qrScannerStyles';

interface QRScannerScreenProps {
  navigation: any;
}

export const QRScannerScreen: React.FC<QRScannerScreenProps> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    // You might want to pass the scanned data to the next screen if needed
    // navigation.navigate('TeeAccess', { qrData: data });
    navigation.navigate('TeeAccess');
  };

  const handleClose = () => {
    navigation.goBack();
  };

  if (hasPermission === null) {
    return (
      <View style={qrScannerStyles.permissionContainer}>
        <Text style={qrScannerStyles.permissionText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={qrScannerStyles.permissionContainer}>
        <MaterialIcons name="camera-alt" size={64} color="#6B7280" />
        <Text style={qrScannerStyles.permissionText}>Camera permission denied</Text>
        <TouchableOpacity
          style={qrScannerStyles.goBackButton}
          onPress={handleClose}
        >
          <Text style={qrScannerStyles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { width } = Dimensions.get('window');
  const scanAreaSize = width * 0.7;

  return (
    <View style={qrScannerStyles.container}>
      <CameraView
        style={qrScannerStyles.camera}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      />

      <View style={qrScannerStyles.overlay}>
        <View style={qrScannerStyles.overlayContent}>
          <TouchableOpacity
            style={qrScannerStyles.closeButton}
            onPress={handleClose}
          >
            <MaterialIcons name="close" size={32} color="#FFFFFF" />
          </TouchableOpacity>

          <View
            style={[qrScannerStyles.scanArea, {
              width: scanAreaSize,
              height: scanAreaSize,
              marginLeft: -scanAreaSize / 2,
              marginTop: -scanAreaSize / 2,
            }]}
          >
            <View style={[qrScannerStyles.corner, qrScannerStyles.cornerTopLeft]} />
            <View style={[qrScannerStyles.corner, qrScannerStyles.cornerTopRight]} />
            <View style={[qrScannerStyles.corner, qrScannerStyles.cornerBottomLeft]} />
            <View style={[qrScannerStyles.corner, qrScannerStyles.cornerBottomRight]} />
          </View>

          <View style={qrScannerStyles.instructionContainer}>
            <Text style={qrScannerStyles.instructionText}>
              Point your camera at a QR code
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
