import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFile: ForwardRefExoticComponent<ScanFileProps & RefAttributes<Svg>>;

export default ScanFile;
export { ScanFile };
