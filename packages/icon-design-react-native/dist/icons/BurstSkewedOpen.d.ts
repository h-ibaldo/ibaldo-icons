import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BurstSkewedOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BurstSkewedOpen: ForwardRefExoticComponent<BurstSkewedOpenProps & RefAttributes<Svg>>;

export default BurstSkewedOpen;
export { BurstSkewedOpen };
