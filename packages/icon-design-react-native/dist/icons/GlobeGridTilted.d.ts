import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeGridTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeGridTilted: ForwardRefExoticComponent<GlobeGridTiltedProps & RefAttributes<Svg>>;

export default GlobeGridTilted;
export { GlobeGridTilted };
