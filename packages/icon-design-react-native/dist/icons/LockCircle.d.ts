import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCircle: ForwardRefExoticComponent<LockCircleProps & RefAttributes<Svg>>;

export default LockCircle;
export { LockCircle };
