import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockRefreshSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockRefreshSmall: ForwardRefExoticComponent<LockRefreshSmallProps & RefAttributes<Svg>>;

export default LockRefreshSmall;
export { LockRefreshSmall };
