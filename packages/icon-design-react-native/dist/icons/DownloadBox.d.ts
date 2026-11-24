import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadBoxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadBox: ForwardRefExoticComponent<DownloadBoxProps & RefAttributes<Svg>>;

export default DownloadBox;
export { DownloadBox };
