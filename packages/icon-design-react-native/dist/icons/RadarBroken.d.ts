import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RadarBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RadarBroken: ForwardRefExoticComponent<RadarBrokenProps & RefAttributes<Svg>>;

export default RadarBroken;
export { RadarBroken };
