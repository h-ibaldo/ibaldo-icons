import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenRound: ForwardRefExoticComponent<LockOpenRoundProps & RefAttributes<Svg>>;

export default LockOpenRound;
export { LockOpenRound };
