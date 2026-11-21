import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChevronDownLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChevronDownLeft: ForwardRefExoticComponent<PhoneChevronDownLeftProps & RefAttributes<Svg>>;

export default PhoneChevronDownLeft;
export { PhoneChevronDownLeft };
