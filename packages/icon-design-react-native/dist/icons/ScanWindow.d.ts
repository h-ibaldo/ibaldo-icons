import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanWindowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanWindow: ForwardRefExoticComponent<ScanWindowProps & RefAttributes<Svg>>;

export default ScanWindow;
export { ScanWindow };
