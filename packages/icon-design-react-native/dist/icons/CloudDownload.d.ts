import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownload: ForwardRefExoticComponent<CloudDownloadProps & RefAttributes<Svg>>;

export default CloudDownload;
export { CloudDownload };
