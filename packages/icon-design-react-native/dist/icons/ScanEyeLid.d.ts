import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanEyeLidProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanEyeLid: ForwardRefExoticComponent<ScanEyeLidProps & RefAttributes<Svg>>;

export default ScanEyeLid;
export { ScanEyeLid };
