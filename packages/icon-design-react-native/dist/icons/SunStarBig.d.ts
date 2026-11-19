import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarBig: ForwardRefExoticComponent<SunStarBigProps & RefAttributes<Svg>>;

export default SunStarBig;
export { SunStarBig };
