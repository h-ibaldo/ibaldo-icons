import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeGridCurvedTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeGridCurvedTilted: ForwardRefExoticComponent<GlobeGridCurvedTiltedProps & RefAttributes<Svg>>;

export default GlobeGridCurvedTilted;
export { GlobeGridCurvedTilted };
