import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopBagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopBag: ForwardRefExoticComponent<LaptopBagProps & RefAttributes<Svg>>;

export default LaptopBag;
export { LaptopBag };
