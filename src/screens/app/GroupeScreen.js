import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import ActionComponents from '../../components/ActionComponents';


const Container = ({ items, navigation }) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const maxItemsToShow = 7; // Nombre maximum d'éléments à afficher sur deux lignes

  const handleShowMore = () => {
    setShowAllItems(!showAllItems);
  };

  const renderItems = () => {
    const visibleItems = showAllItems ? items : items.slice(0, maxItemsToShow);

    return visibleItems.map((item, index) => (
      <View key={index}>
      {index <= maxItemsToShow && items.length && (
        <View style={styles.item}>
          {items[index + 1]}
          {/* {console.log(index, maxItemsToShow, visibleItems.length, items.length, ( 0 < ((items.length) -  (visibleItems.length)) ))} */}
        </View>
      )}
      </View>
    ));
  };

  return (
    // <View style={{ display:'grid', gride}}>
    <View style={styles.actioncontainer}> 
      {renderItems()}
      {/* {More()} */}
    </View>
  );
};

const GroupeScreen = ({navigation}) => {
  const items = [
    <ActionComponents onPress={()=>navigation.navigate("MoreDetails")} iconName="ellipsis-horizontal" text={"More"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Deposit")} iconName="cloud-upload-outline" text={"Deposit"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Withdraw")} iconName="cloud-download-outline" text={"Withdraw"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" text={"Send"}/>,
    <ActionComponents onPress={()=>navigation.navigate("MoreDetails")} iconName="storefront-outline" text={"Store M"}/>, 
    <ActionComponents onPress={()=>navigation.navigate("Deposit")} iconName="cloud-upload-outline" text={"Tax"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Withdraw")} iconName="people-outline" text={"Njangi"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" text={"My Saving"}/>,
    <ActionComponents onPress={()=>navigation.navigate("Send")} iconName="paper-plane-outline" text={"Borrow"}/>,
  ]; // Remplacez par vos éléments réels
// const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7']; // Remplacez par vos éléments réels
    const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  return (
    <View style={{ flex: 1, }}>
      <StatusBar hidden={!isStatusBarVisible} />
      <View style={{ flex: 0.4, backgroundColor: "#021004", }}></View>
      <View style={{  }}>
        <View style={{ backgroundColor:"#07143F",width:"75%", padding:10, margin:5,borderRadius:15,}}>
                  <Text style={{fontSize:20, color:'white'}}>Hello ,</Text>
                  <Text style={styles.name}>James Brown</Text>
                </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "rgba(255, 215, 0, 0.70)", }}></View>
      <View style={{ flex: 3, backgroundColor: "#021024", }}></View>
      <View style={{ flex: 2, /* backgroundColor: "#021034", */ }}>
        <Container items={items} style={styles.item }/>  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 
  actioncontainer:{
    flex:1,
    width: 'auto',
    height:'auto',
    display:'flex',
    flexWrap: 'wrap',
    flexDirection:"row",
    justifyContent:'space-evenly',
    marginHorizontal:20,
    marginTop:10
  },
  item: {
    // flexGrow: 1,
    // flexBasis: 200, // Ajustez selon la largeur des éléments
    // margin: 5,
    // backgroundColor: '#f0f0f0',
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // Ajoutez éventuellement des bordures ou des styles pour une meilleure visibilité
    width:'22%',
    flexgrow:1, 
    flexbasis: 200, 
    alignItems:"center", 
    justifyContent:"center", 
    margin:5, 
    backgroundColor:'gray'
  }
   
})

export default GroupeScreen



// const App = () => {

//   return (
//     <View style={styles.appContainer}>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // flexDirection: 'row',
//     // flexWrap: 'wrap',

//     flex:1,
//     width: 'auto',
//     height:'auto',
//     display:'flex',
//     flexWrap: 'wrap',
//     backgroundColor:"purple",
//     flexDirection:"row",
//     justifyContent:'space-evenly',
//     marginHorizontal:20,
//     marginTop:10
//   },
//   item: {
//     // flexGrow: 1,
//     // flexBasis: 200, // Ajustez selon la largeur des éléments
//     // margin: 5,
//     // backgroundColor: '#f0f0f0',
//     // padding: 10,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // Ajoutez éventuellement des bordures ou des styles pour une meilleure visibilité
//     flexgrow:1, flexbasis: 200, alignItems:"center", justifyContent:"center", margin:5,},
//   showMoreText: {
//     color: '#000', // Ajustez la couleur pour une meilleure lisibilité
//     fontSize: 16, // Ajustez la taille de la police si nécessaire
//   },
//   appContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
// });

// export default App;





// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const Container = ({ items }) => {
//   const [showAllItems, setShowAllItems] = useState(false);
//   const maxItemsToShow = 6; // Nombre maximum d'éléments à afficher sur deux lignes

//   const handleShowMore = () => {
//     setShowAllItems(!showAllItems);
//   };

//   const renderItems = () => {
//     const visibleItems = showAllItems ? items : items.slice(0, maxItemsToShow);

//     return visibleItems.map((item, index) => (
//       <View key={index} style={styles.item}>
//         <Text>{item}</Text>
//         {index === visibleItems.length - 1 && items.length > maxItemsToShow && (
//           <TouchableOpacity onPress={handleShowMore}>
//             <Text style={styles.showMoreText}>
//               {showAllItems ? 'Afficher moins' : 'Afficher plus'}
//             </Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       {renderItems()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   item: {
//     flexGrow: 1,
//     flexBasis: 200, // Ajustez selon la largeur des éléments
//     margin: 5,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // Ajoutez éventuellement des bordures ou des styles pour une meilleure visibilité
//   },
//   showMoreText: {
//     color: '#000', // Ajustez la couleur pour une meilleure lisibilité
//     fontSize: 16, // Ajustez la taille de la police si nécessaire
//   },
// });

// export default Container;


// // import Container from './Container';

// const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7']; // Remplacez par vos éléments réels

// <Container items={items} />






















