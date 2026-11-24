import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanVideoLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanVideoLarge: ForwardRefExoticComponent<ScanVideoLargeProps & RefAttributes<Svg>>;

export default ScanVideoLarge;
export { ScanVideoLarge };
