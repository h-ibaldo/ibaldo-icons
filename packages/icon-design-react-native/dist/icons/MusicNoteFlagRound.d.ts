import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicNoteFlagRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagRound: ForwardRefExoticComponent<MusicNoteFlagRoundProps & RefAttributes<Svg>>;

export default MusicNoteFlagRound;
export { MusicNoteFlagRound };
