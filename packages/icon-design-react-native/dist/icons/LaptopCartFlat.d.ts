import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopCartFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopCartFlat: ForwardRefExoticComponent<LaptopCartFlatProps & RefAttributes<Svg>>;

export default LaptopCartFlat;
export { LaptopCartFlat };
