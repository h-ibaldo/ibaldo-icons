import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanGlobeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanGlobe: ForwardRefExoticComponent<ScanGlobeProps & RefAttributes<Svg>>;

export default ScanGlobe;
export { ScanGlobe };
