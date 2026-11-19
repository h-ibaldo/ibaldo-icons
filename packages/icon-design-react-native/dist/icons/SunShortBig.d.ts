import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunShortBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunShortBig: ForwardRefExoticComponent<SunShortBigProps & RefAttributes<Svg>>;

export default SunShortBig;
export { SunShortBig };
