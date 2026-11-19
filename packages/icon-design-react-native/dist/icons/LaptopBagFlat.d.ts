import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopBagFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopBagFlat: ForwardRefExoticComponent<LaptopBagFlatProps & RefAttributes<Svg>>;

export default LaptopBagFlat;
export { LaptopBagFlat };
