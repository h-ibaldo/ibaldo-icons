import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockRound: ForwardRefExoticComponent<LockRoundProps & RefAttributes<Svg>>;

export default LockRound;
export { LockRound };
