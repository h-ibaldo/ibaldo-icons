import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanSquareStack: ForwardRefExoticComponent<ScanSquareStackProps & RefAttributes<Svg>>;

export default ScanSquareStack;
export { ScanSquareStack };
