import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenshotCameraPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenshotCameraPlus: ForwardRefExoticComponent<ScreenshotCameraPlusProps & RefAttributes<Svg>>;

export default ScreenshotCameraPlus;
export { ScreenshotCameraPlus };
