import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScannerRound: ForwardRefExoticComponent<ScannerRoundProps & RefAttributes<Svg>>;

export default ScannerRound;
export { ScannerRound };
