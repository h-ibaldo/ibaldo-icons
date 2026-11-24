import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanVideoSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanVideoSmall: ForwardRefExoticComponent<ScanVideoSmallProps & RefAttributes<Svg>>;

export default ScanVideoSmall;
export { ScanVideoSmall };
