import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFileBeamProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFileBeam: ForwardRefExoticComponent<ScanFileBeamProps & RefAttributes<Svg>>;

export default ScanFileBeam;
export { ScanFileBeam };
