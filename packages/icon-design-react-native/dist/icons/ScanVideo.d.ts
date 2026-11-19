import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanVideoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanVideo: ForwardRefExoticComponent<ScanVideoProps & RefAttributes<Svg>>;

export default ScanVideo;
export { ScanVideo };
