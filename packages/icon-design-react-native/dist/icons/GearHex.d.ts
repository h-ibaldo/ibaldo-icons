import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearHexProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearHex: ForwardRefExoticComponent<GearHexProps & RefAttributes<Svg>>;

export default GearHex;
export { GearHex };
