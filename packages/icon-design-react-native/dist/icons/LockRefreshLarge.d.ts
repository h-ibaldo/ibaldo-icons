import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockRefreshLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockRefreshLarge: ForwardRefExoticComponent<LockRefreshLargeProps & RefAttributes<Svg>>;

export default LockRefreshLarge;
export { LockRefreshLarge };
