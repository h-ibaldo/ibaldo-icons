import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopCartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopCart: ForwardRefExoticComponent<LaptopCartProps & RefAttributes<Svg>>;

export default LaptopCart;
export { LaptopCart };
