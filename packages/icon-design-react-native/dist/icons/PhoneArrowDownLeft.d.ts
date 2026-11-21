import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowDownLeft: ForwardRefExoticComponent<PhoneArrowDownLeftProps & RefAttributes<Svg>>;

export default PhoneArrowDownLeft;
export { PhoneArrowDownLeft };
