import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChevronUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChevronUpRight: ForwardRefExoticComponent<PhoneChevronUpRightProps & RefAttributes<Svg>>;

export default PhoneChevronUpRight;
export { PhoneChevronUpRight };
