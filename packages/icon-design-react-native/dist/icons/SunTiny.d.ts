import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunTinyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunTiny: ForwardRefExoticComponent<SunTinyProps & RefAttributes<Svg>>;

export default SunTiny;
export { SunTiny };
