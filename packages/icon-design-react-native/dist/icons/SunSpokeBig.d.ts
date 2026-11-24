import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSpokeBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSpokeBig: ForwardRefExoticComponent<SunSpokeBigProps & RefAttributes<Svg>>;

export default SunSpokeBig;
export { SunSpokeBig };
