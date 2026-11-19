import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockLock: ForwardRefExoticComponent<ClockLockProps & RefAttributes<Svg>>;

export default ClockLock;
export { ClockLock };
