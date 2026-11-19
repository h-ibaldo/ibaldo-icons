import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicNoteFlagWaveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagWave: ForwardRefExoticComponent<MusicNoteFlagWaveProps & RefAttributes<Svg>>;

export default MusicNoteFlagWave;
export { MusicNoteFlagWave };
