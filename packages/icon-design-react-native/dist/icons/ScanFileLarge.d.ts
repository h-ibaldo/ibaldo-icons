import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFileLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFileLarge: ForwardRefExoticComponent<ScanFileLargeProps & RefAttributes<Svg>>;

export default ScanFileLarge;
export { ScanFileLarge };
