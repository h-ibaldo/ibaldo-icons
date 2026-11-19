import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareLaptopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareLaptop: ForwardRefExoticComponent<ScreenShareLaptopProps & RefAttributes<Svg>>;

export default ScreenShareLaptop;
export { ScreenShareLaptop };
