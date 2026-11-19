import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerPaperProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScannerPaper: ForwardRefExoticComponent<ScannerPaperProps & RefAttributes<Svg>>;

export default ScannerPaper;
export { ScannerPaper };
