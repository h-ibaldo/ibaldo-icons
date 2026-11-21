import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneBan: ForwardRefExoticComponent<PhoneBanProps & RefAttributes<Svg>>;

export default PhoneBan;
export { PhoneBan };
