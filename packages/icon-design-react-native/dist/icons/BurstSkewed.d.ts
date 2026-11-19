import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BurstSkewedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BurstSkewed: ForwardRefExoticComponent<BurstSkewedProps & RefAttributes<Svg>>;

export default BurstSkewed;
export { BurstSkewed };
