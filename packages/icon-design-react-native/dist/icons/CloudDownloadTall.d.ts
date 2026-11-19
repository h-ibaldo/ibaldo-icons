import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownloadTall: ForwardRefExoticComponent<CloudDownloadTallProps & RefAttributes<Svg>>;

export default CloudDownloadTall;
export { CloudDownloadTall };
