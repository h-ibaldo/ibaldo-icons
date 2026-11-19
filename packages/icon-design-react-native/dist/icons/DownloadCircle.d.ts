import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadCircle: ForwardRefExoticComponent<DownloadCircleProps & RefAttributes<Svg>>;

export default DownloadCircle;
export { DownloadCircle };
