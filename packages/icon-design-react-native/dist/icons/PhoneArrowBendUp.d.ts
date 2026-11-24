import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowBendUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowBendUp: ForwardRefExoticComponent<PhoneArrowBendUpProps & RefAttributes<Svg>>;

export default PhoneArrowBendUp;
export { PhoneArrowBendUp };
