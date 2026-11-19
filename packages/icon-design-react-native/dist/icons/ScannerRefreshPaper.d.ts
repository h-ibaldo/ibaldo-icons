import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerRefreshPaperProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshPaper: ForwardRefExoticComponent<ScannerRefreshPaperProps & RefAttributes<Svg>>;

export default ScannerRefreshPaper;
export { ScannerRefreshPaper };
