import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFaceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFace: ForwardRefExoticComponent<ScanFaceProps & RefAttributes<Svg>>;

export default ScanFace;
export { ScanFace };
