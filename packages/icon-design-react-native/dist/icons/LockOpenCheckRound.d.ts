import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckRound: ForwardRefExoticComponent<LockOpenCheckRoundProps & RefAttributes<Svg>>;

export default LockOpenCheckRound;
export { LockOpenCheckRound };
