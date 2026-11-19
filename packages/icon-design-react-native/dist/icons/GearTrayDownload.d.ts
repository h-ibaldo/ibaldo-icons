import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearTrayDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearTrayDownload: ForwardRefExoticComponent<GearTrayDownloadProps & RefAttributes<Svg>>;

export default GearTrayDownload;
export { GearTrayDownload };
