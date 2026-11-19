import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockKeyholeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockKeyhole: ForwardRefExoticComponent<LockKeyholeProps & RefAttributes<Svg>>;

export default LockKeyhole;
export { LockKeyhole };
