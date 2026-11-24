import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicRound: ForwardRefExoticComponent<MusicRoundProps & RefAttributes<Svg>>;

export default MusicRound;
export { MusicRound };
