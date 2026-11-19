import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockDots: ForwardRefExoticComponent<LockDotsProps & RefAttributes<Svg>>;

export default LockDots;
export { LockDots };
