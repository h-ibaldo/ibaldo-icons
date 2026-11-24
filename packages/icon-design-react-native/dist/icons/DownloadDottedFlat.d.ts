import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadDottedFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadDottedFlat: ForwardRefExoticComponent<DownloadDottedFlatProps & RefAttributes<Svg>>;

export default DownloadDottedFlat;
export { DownloadDottedFlat };
