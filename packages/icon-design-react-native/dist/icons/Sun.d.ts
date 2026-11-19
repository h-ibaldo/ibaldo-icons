import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Sun: ForwardRefExoticComponent<SunProps & RefAttributes<Svg>>;

export default Sun;
export { Sun };
