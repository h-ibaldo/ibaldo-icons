import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeGridCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeGridCurved: ForwardRefExoticComponent<GlobeGridCurvedProps & RefAttributes<Svg>>;

export default GlobeGridCurved;
export { GlobeGridCurved };
