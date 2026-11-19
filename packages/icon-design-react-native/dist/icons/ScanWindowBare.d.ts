import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanWindowBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanWindowBare: ForwardRefExoticComponent<ScanWindowBareProps & RefAttributes<Svg>>;

export default ScanWindowBare;
export { ScanWindowBare };
