import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenshotAreaPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenshotAreaPlus: ForwardRefExoticComponent<ScreenshotAreaPlusProps & RefAttributes<Svg>>;

export default ScreenshotAreaPlus;
export { ScreenshotAreaPlus };
