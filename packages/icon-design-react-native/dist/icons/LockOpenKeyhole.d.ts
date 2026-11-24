import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenKeyholeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenKeyhole: ForwardRefExoticComponent<LockOpenKeyholeProps & RefAttributes<Svg>>;

export default LockOpenKeyhole;
export { LockOpenKeyhole };
