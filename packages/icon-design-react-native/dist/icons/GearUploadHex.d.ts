import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearUploadHexProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearUploadHex: ForwardRefExoticComponent<GearUploadHexProps & RefAttributes<Svg>>;

export default GearUploadHex;
export { GearUploadHex };
