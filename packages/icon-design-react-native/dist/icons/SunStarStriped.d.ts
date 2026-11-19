import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarStriped: ForwardRefExoticComponent<SunStarStripedProps & RefAttributes<Svg>>;

export default SunStarStriped;
export { SunStarStriped };
