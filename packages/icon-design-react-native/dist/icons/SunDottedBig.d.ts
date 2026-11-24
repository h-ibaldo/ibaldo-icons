import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunDottedBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunDottedBig: ForwardRefExoticComponent<SunDottedBigProps & RefAttributes<Svg>>;

export default SunDottedBig;
export { SunDottedBig };
