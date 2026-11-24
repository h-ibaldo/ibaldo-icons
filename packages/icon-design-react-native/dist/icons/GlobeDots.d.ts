import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeDots: ForwardRefExoticComponent<GlobeDotsProps & RefAttributes<Svg>>;

export default GlobeDots;
export { GlobeDots };
