import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopHandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopHand: ForwardRefExoticComponent<LaptopHandProps & RefAttributes<Svg>>;

export default LaptopHand;
export { LaptopHand };
