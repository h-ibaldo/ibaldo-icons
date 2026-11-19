import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockCheckCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockCheckCornerRound: ForwardRefExoticComponent<LockCheckCornerRoundProps & RefAttributes<Svg>>;

export default LockCheckCornerRound;
export { LockCheckCornerRound };
