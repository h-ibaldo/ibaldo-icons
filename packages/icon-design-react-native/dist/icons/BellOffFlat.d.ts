import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOffFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOffFlat: ForwardRefExoticComponent<BellOffFlatProps & RefAttributes<Svg>>;

export default BellOffFlat;
export { BellOffFlat };
