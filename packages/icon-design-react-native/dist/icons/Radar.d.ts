import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RadarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Radar: ForwardRefExoticComponent<RadarProps & RefAttributes<Svg>>;

export default Radar;
export { Radar };
