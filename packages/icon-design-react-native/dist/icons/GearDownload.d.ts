import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearDownload: ForwardRefExoticComponent<GearDownloadProps & RefAttributes<Svg>>;

export default GearDownload;
export { GearDownload };
