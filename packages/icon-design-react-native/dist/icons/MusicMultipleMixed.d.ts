import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicMultipleMixedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicMultipleMixed: ForwardRefExoticComponent<MusicMultipleMixedProps & RefAttributes<Svg>>;

export default MusicMultipleMixed;
export { MusicMultipleMixed };
