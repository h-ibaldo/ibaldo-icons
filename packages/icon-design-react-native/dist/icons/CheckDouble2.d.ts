import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckDouble2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckDouble2: ForwardRefExoticComponent<CheckDouble2Props & RefAttributes<Svg>>;

export default CheckDouble2;
export { CheckDouble2 };
