import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopArrowUpRight: ForwardRefExoticComponent<LaptopArrowUpRightProps & RefAttributes<Svg>>;

export default LaptopArrowUpRight;
export { LaptopArrowUpRight };
