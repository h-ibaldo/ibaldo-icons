import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXFlat: ForwardRefExoticComponent<BellXFlatProps & RefAttributes<Svg>>;

export default BellXFlat;
export { BellXFlat };
