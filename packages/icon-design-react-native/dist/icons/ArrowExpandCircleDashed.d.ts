import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowExpandCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowExpandCircleDashed: ForwardRefExoticComponent<ArrowExpandCircleDashedProps & RefAttributes<Svg>>;

export default ArrowExpandCircleDashed;
export { ArrowExpandCircleDashed };
