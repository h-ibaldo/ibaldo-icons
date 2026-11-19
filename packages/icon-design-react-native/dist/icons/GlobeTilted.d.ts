import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeTilted: ForwardRefExoticComponent<GlobeTiltedProps & RefAttributes<Svg>>;

export default GlobeTilted;
export { GlobeTilted };
