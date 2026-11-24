import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerRefreshRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshRound: ForwardRefExoticComponent<ScannerRefreshRoundProps & RefAttributes<Svg>>;

export default ScannerRefreshRound;
export { ScannerRefreshRound };
