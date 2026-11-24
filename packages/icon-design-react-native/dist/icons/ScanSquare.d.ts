import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanSquare: ForwardRefExoticComponent<ScanSquareProps & RefAttributes<Svg>>;

export default ScanSquare;
export { ScanSquare };
