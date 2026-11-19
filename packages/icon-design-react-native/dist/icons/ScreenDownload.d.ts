import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenDownload: ForwardRefExoticComponent<ScreenDownloadProps & RefAttributes<Svg>>;

export default ScreenDownload;
export { ScreenDownload };
