import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicDoubleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusicDoubleRound: ForwardRefExoticComponent<CloudMusicDoubleRoundProps & RefAttributes<Svg>>;

export default CloudMusicDoubleRound;
export { CloudMusicDoubleRound };
