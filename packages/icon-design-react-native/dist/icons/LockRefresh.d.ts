import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockRefresh: ForwardRefExoticComponent<LockRefreshProps & RefAttributes<Svg>>;

export default LockRefresh;
export { LockRefresh };
