import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockXRound: ForwardRefExoticComponent<LockXRoundProps & RefAttributes<Svg>>;

export default LockXRound;
export { LockXRound };
