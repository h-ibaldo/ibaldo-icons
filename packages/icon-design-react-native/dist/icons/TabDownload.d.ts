import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDownload: ForwardRefExoticComponent<TabDownloadProps & RefAttributes<Svg>>;

export default TabDownload;
export { TabDownload };
