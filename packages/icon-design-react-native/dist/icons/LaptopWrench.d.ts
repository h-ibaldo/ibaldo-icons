import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopWrenchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopWrench: ForwardRefExoticComponent<LaptopWrenchProps & RefAttributes<Svg>>;

export default LaptopWrench;
export { LaptopWrench };
