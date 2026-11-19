import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingFlat: ForwardRefExoticComponent<BellRingFlatProps & RefAttributes<Svg>>;

export default BellRingFlat;
export { BellRingFlat };
