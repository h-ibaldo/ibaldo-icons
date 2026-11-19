import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListDownload: ForwardRefExoticComponent<WindowListDownloadProps & RefAttributes<Svg>>;

export default WindowListDownload;
export { WindowListDownload };
