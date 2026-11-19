import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusicRound: ForwardRefExoticComponent<CloudMusicRoundProps & RefAttributes<Svg>>;

export default CloudMusicRound;
export { CloudMusicRound };
