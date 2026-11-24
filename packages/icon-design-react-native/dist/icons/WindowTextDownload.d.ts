import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowTextDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowTextDownload: ForwardRefExoticComponent<WindowTextDownloadProps & RefAttributes<Svg>>;

export default WindowTextDownload;
export { WindowTextDownload };
