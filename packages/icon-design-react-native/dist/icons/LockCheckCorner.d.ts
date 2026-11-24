import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckCorner: ForwardRefExoticComponent<LockCheckCornerProps & RefAttributes<Svg>>;

export default LockCheckCorner;
export { LockCheckCorner };
