import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowUpRight: ForwardRefExoticComponent<PhoneArrowUpRightProps & RefAttributes<Svg>>;

export default PhoneArrowUpRight;
export { PhoneArrowUpRight };
