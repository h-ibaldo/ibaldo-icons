import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeGrid: ForwardRefExoticComponent<GlobeGridProps & RefAttributes<Svg>>;

export default GlobeGrid;
export { GlobeGrid };
