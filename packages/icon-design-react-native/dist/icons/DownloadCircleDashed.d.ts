import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadCircleDashed: ForwardRefExoticComponent<DownloadCircleDashedProps & RefAttributes<Svg>>;

export default DownloadCircleDashed;
export { DownloadCircleDashed };
