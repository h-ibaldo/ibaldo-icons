import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearDownloadHexProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearDownloadHex: ForwardRefExoticComponent<GearDownloadHexProps & RefAttributes<Svg>>;

export default GearDownloadHex;
export { GearDownloadHex };
