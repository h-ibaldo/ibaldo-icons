import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerFrontProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScannerFront: ForwardRefExoticComponent<ScannerFrontProps & RefAttributes<Svg>>;

export default ScannerFront;
export { ScannerFront };
