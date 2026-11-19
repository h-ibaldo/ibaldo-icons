import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudXCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudXCornerRound: ForwardRefExoticComponent<CloudXCornerRoundProps & RefAttributes<Svg>>;

export default CloudXCornerRound;
export { CloudXCornerRound };
