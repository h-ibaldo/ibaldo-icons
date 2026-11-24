import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudCheckCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudCheckCornerRound: ForwardRefExoticComponent<CloudCheckCornerRoundProps & RefAttributes<Svg>>;

export default CloudCheckCornerRound;
export { CloudCheckCornerRound };
