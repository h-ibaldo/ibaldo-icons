import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadFlat: ForwardRefExoticComponent<DownloadFlatProps & RefAttributes<Svg>>;

export default DownloadFlat;
export { DownloadFlat };
