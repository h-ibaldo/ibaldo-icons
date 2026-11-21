import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneArrowDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneArrowDownLeftCircle: ForwardRefExoticComponent<PhoneArrowDownLeftCircleProps & RefAttributes<Svg>>;

export default PhoneArrowDownLeftCircle;
export { PhoneArrowDownLeftCircle };
