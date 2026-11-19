import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLockRound: ForwardRefExoticComponent<CloudLockRoundProps & RefAttributes<Svg>>;

export default CloudLockRound;
export { CloudLockRound };
