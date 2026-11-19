import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunPointed: ForwardRefExoticComponent<SunPointedProps & RefAttributes<Svg>>;

export default SunPointed;
export { SunPointed };
