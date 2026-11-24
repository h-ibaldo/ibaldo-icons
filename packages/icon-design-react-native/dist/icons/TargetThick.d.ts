import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TargetThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TargetThick: ForwardRefExoticComponent<TargetThickProps & RefAttributes<Svg>>;

export default TargetThick;
export { TargetThick };
