import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicMultipleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicMultiple: ForwardRefExoticComponent<MusicMultipleProps & RefAttributes<Svg>>;

export default MusicMultiple;
export { MusicMultiple };
