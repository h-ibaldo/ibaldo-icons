import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadBoxNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadBoxNotch: ForwardRefExoticComponent<DownloadBoxNotchProps & RefAttributes<Svg>>;

export default DownloadBoxNotch;
export { DownloadBoxNotch };
