import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunCurved: ForwardRefExoticComponent<SunCurvedProps & RefAttributes<Svg>>;

export default SunCurved;
export { SunCurved };
