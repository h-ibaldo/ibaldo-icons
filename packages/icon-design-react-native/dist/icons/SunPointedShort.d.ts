import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunPointedShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunPointedShort: ForwardRefExoticComponent<SunPointedShortProps & RefAttributes<Svg>>;

export default SunPointedShort;
export { SunPointedShort };
