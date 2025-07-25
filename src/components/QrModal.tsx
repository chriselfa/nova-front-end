// import React from 'react';
// import { View, Text, Modal, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';

// const QrModal = ({
//   visible = false,
//   onClose,
//   qrValue = '',
//   containerStyle = {},
//   overlayColor = 'rgba(0,0,0,0.7)',
//   modalStyle = {},
//   borderRadius = 20,
//   modalPadding = 25,
//   modalBackgroundColor = 'white',
//   title = "Scanner ce QR Code",
//   titleStyle = {},
//   titleTextStyle = {},
//   qrSize = 200,
//   qrColor = 'black',
//   qrBackgroundColor = 'white',
//   qrContainerStyle = {},
//   qrLogo,
//   qrLogoSize = 40,
//   qrLogoBackgroundColor = 'white',
//   qrLogoMargin = 5,
//   qrLoadingComponent = <ActivityIndicator size="large" color="#0000ff" />,
//   description = "Présentez ce code au scanner pour effectuer votre transaction",
//   descriptionStyle = {},
//   descriptionTextStyle = {},
//   showCloseButton = true,
//   closeButtonStyle = {},
//   closeButtonText = "Fermer",
//   closeButtonTextStyle = {},
//   closeButtonBackgroundColor = '#2196F3',
//   closeButtonTextColor = 'white',
//   closeButtonPadding = 12,
//   closeButtonBorderRadius = 10,
//   customHeader,
//   customFooter,
//   customQrComponent,
// }) => {
//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <View style={[styles.container, { backgroundColor: overlayColor }, containerStyle]}>
//         <View style={[
//           styles.modalView,
//           {
//             borderRadius,
//             padding: modalPadding,
//             backgroundColor: modalBackgroundColor,
//           },
//           modalStyle
//         ]}>
//           {/* Tout le contenu doit être dans un seul parent */}
//           <View>
//             {customHeader || (
//               <View style={[styles.header, titleStyle]}>
//                 <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
//               </View>
//             )}
            
//             <View style={[styles.qrContainer, qrContainerStyle]}>
//               {customQrComponent || (
//                 <QRCode
//                   value={qrValue}
//                   size={qrSize}
//                   color={qrColor}
//                   backgroundColor={qrBackgroundColor}
//                   logo={qrLogo}
//                   logoSize={qrLogoSize}
//                   logoBackgroundColor={qrLogoBackgroundColor}
//                   logoMargin={qrLogoMargin}
//                   logoBorderRadius={borderRadius / 2}
//                 />
//               )}
//             </View>
            
//             <View style={[styles.descriptionContainer, descriptionStyle]}>
//               <Text style={[styles.descriptionText, descriptionTextStyle]}>{description}</Text>
//             </View>
            
//             {customFooter || (showCloseButton && (
//               <TouchableOpacity
//                 style={[
//                   styles.closeButton,
//                   {
//                     backgroundColor: closeButtonBackgroundColor,
//                     padding: closeButtonPadding,
//                     borderRadius: closeButtonBorderRadius,
//                   },
//                   closeButtonStyle
//                 ]}
//                 onPress={onClose}
//               >
//                 <Text style={[styles.closeButtonText, { color: closeButtonTextColor }, closeButtonTextStyle]}>
//                   {closeButtonText}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     alignItems: 'center',
//    // shadowColor: '#000',
//    // shadowOffset: { width: 0, height: 2 },
//    // shadowOpacity: 0.25,
//    // shadowRadius: 4,
//     elevation: 5,
//     width: '80%',
//   },
//   header: {
//     marginBottom: 15,
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   qrContainer: {
//     marginVertical: 15,
//     alignItems: 'center',
//   },
//   descriptionContainer: {
//     marginBottom: 20,
//   },
//   descriptionText: {
//     textAlign: 'center',
//   },
//   closeButton: {
//     // width: '100%',
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     fontWeight: 'bold',    
//     fontSize: 16,
//   },
// });

// export default QrModal;


// // src/components/QrModal.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrModal = ({ 
    visible, 
    onClose, 
    qrValue, 

    borderRadius = 20,
    qrLogo,
    qrLogoSize = 40,
    qrLogoBackgroundColor = 'white',
    qrLogoMargin = 5,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Scanner ce QR Code</Text>
          
          <View style={styles.qrContainer}>
            <QRCode
              value={qrValue}
              size={200}
              color="black"
              backgroundColor="white"
                  logo={qrLogo}
                  logoSize={qrLogoSize}
                  logoBackgroundColor={qrLogoBackgroundColor}
                  logoMargin={qrLogoMargin}
                  logoBorderRadius={borderRadius / 2}
            />
          </View>
          
          <Text style={styles.modalText}>
            Présentez ce code au scanner pour effectuer votre un transaction
          </Text>
          
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#07143F',
  },
  qrContainer: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  closeButton: {
    backgroundColor: '#07143F',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QrModal;
