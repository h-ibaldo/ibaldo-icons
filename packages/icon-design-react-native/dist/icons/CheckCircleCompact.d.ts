import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleCompact: ForwardRefExoticComponent<CheckCircleCompactProps & RefAttributes<Svg>>;

export default CheckCircleCompact;
export { CheckCircleCompact };
