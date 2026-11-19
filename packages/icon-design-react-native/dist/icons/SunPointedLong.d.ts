import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunPointedLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunPointedLong: ForwardRefExoticComponent<SunPointedLongProps & RefAttributes<Svg>>;

export default SunPointedLong;
export { SunPointedLong };
