// dimension.jsx

import { Dimensions } from 'react-native';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');
//const { width: SCREEN_WIDTH } = Dimensions.get('width');
const HEIGHT_0_ON_POURCENT = 5 / 100;
const HEIGHT_1_ON_POURCENT = 7 / 100;
const HEIGHT_2_ON_POURCENT = 10 / 100;
const HEIGHT_3_ON_POURCENT = 7.5 / 100;
const SIZE_OF_ICON_SIZE30_POURCENT = 100;
export const SREEN_HEIGHT_0_ON_POURCENT = SCREEN_HEIGHT * HEIGHT_0_ON_POURCENT;
export const SREEN_HEIGHT_1_ON_POURCENT = SCREEN_HEIGHT * HEIGHT_1_ON_POURCENT;
export const SREEN_HEIGHT_2_ON_POURCENT = SCREEN_HEIGHT * HEIGHT_2_ON_POURCENT;
export const SREEN_HEIGHT_3_ON_POURCENT = SCREEN_HEIGHT * HEIGHT_3_ON_POURCENT;
export const SREEN_SIZE_OF_ICON_SIW30_POURCENT = SCREEN_HEIGHT * SIZE_OF_ICON_SIZE30_POURCENT;


export const getIconSize = () => {
    const { width } = Dimensions.get('window');
    // console.log(width);
    if (width <= 320) return 20; // Taille d'écran petite
    if (width <= 480) return 40; // Taille d'écran moyenne
    return 50; // Taille d'écran grande
  };