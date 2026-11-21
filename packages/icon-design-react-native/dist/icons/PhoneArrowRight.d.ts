import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowRight: ForwardRefExoticComponent<PhoneArrowRightProps & RefAttributes<Svg>>;

export default PhoneArrowRight;
export { PhoneArrowRight };
