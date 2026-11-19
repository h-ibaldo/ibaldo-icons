import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudXRound: ForwardRefExoticComponent<CloudXRoundProps & RefAttributes<Svg>>;

export default CloudXRound;
export { CloudXRound };
