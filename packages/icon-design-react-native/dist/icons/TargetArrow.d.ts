import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TargetArrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TargetArrow: ForwardRefExoticComponent<TargetArrowProps & RefAttributes<Svg>>;

export default TargetArrow;
export { TargetArrow };
