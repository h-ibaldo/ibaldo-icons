import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowLeft: ForwardRefExoticComponent<PhoneArrowLeftProps & RefAttributes<Svg>>;

export default PhoneArrowLeft;
export { PhoneArrowLeft };
