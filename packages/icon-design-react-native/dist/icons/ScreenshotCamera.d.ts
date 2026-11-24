import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenshotCameraProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenshotCamera: ForwardRefExoticComponent<ScreenshotCameraProps & RefAttributes<Svg>>;

export default ScreenshotCamera;
export { ScreenshotCamera };
