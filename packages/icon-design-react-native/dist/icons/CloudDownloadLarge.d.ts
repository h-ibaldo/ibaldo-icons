import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownloadLarge: ForwardRefExoticComponent<CloudDownloadLargeProps & RefAttributes<Svg>>;

export default CloudDownloadLarge;
export { CloudDownloadLarge };
