import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneCircleArrowOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneCircleArrowOut: ForwardRefExoticComponent<PhoneCircleArrowOutProps & RefAttributes<Svg>>;

export default PhoneCircleArrowOut;
export { PhoneCircleArrowOut };
