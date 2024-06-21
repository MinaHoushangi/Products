import {Dimensions} from 'react-native';

export const MIN_TABLET_WIDTH = 600;

const {width, height} = Dimensions.get('window');

export {width as WINDOW_WIDTH, height as WINDOW_HEIGHT};

export const LIST_NUM_OF_COLUMNS = width > MIN_TABLET_WIDTH ? 3 : 2;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scale a size based on the horizontal dimension of the screen.
 * @param size - The size to be scaled.
 * @returns The scaled size based on horizontal scale factor.
 */
export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;

/**
 * Scale a size based on the vertical dimension of the screen.
 * @param size - The size to be scaled.
 * @returns The scaled size based on vertical scale factor.
 */
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

/**
 * Scale a size based on both horizontal and vertical factors with a moderation factor.
 * @param size - The size to be scaled.
 * @param factor - The moderation factor (default is 0.5).
 * @returns The scaled size based on horizontal and vertical scales with moderation.
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const SCREEN_PADDING = horizontalScale(16);
