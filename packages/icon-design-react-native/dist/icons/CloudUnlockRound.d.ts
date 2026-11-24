import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUnlockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUnlockRound: ForwardRefExoticComponent<CloudUnlockRoundProps & RefAttributes<Svg>>;

export default CloudUnlockRound;
export { CloudUnlockRound };
