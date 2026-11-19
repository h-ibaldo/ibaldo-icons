import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicSixteenthProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicSixteenth: ForwardRefExoticComponent<MusicSixteenthProps & RefAttributes<Svg>>;

export default MusicSixteenth;
export { MusicSixteenth };
