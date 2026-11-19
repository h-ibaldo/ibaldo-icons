import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellFlat: ForwardRefExoticComponent<BellFlatProps & RefAttributes<Svg>>;

export default BellFlat;
export { BellFlat };
