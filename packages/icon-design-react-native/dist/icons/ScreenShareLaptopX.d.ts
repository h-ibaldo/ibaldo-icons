import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareLaptopXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShareLaptopX: ForwardRefExoticComponent<ScreenShareLaptopXProps & RefAttributes<Svg>>;

export default ScreenShareLaptopX;
export { ScreenShareLaptopX };
