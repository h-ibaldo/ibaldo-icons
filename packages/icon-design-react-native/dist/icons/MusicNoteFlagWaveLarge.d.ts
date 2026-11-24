import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicNoteFlagWaveLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagWaveLarge: ForwardRefExoticComponent<MusicNoteFlagWaveLargeProps & RefAttributes<Svg>>;

export default MusicNoteFlagWaveLarge;
export { MusicNoteFlagWaveLarge };
