import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LockOpenKeyholeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LockOpenKeyholeRound: ForwardRefExoticComponent<LockOpenKeyholeRoundProps & RefAttributes<Svg>>;

export default LockOpenKeyholeRound;
export { LockOpenKeyholeRound };
