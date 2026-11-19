import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockKeyholeDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockKeyholeDot: ForwardRefExoticComponent<LockKeyholeDotProps & RefAttributes<Svg>>;

export default LockKeyholeDot;
export { LockKeyholeDot };
