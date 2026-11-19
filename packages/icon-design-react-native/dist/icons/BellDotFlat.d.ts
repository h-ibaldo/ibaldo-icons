import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellDotFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellDotFlat: ForwardRefExoticComponent<BellDotFlatProps & RefAttributes<Svg>>;

export default BellDotFlat;
export { BellDotFlat };
