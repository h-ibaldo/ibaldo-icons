import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckDouble: ForwardRefExoticComponent<CheckDoubleProps & RefAttributes<Svg>>;

export default CheckDouble;
export { CheckDouble };
