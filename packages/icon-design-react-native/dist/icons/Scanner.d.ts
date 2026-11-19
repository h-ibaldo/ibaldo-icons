import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScannerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Scanner: ForwardRefExoticComponent<ScannerProps & RefAttributes<Svg>>;

export default Scanner;
export { Scanner };
