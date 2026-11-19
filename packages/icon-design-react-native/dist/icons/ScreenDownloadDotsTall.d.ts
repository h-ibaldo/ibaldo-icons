import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenDownloadDotsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenDownloadDotsTall: ForwardRefExoticComponent<ScreenDownloadDotsTallProps & RefAttributes<Svg>>;

export default ScreenDownloadDotsTall;
export { ScreenDownloadDotsTall };
