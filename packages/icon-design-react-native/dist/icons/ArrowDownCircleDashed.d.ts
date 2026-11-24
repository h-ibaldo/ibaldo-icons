import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleDashed: ForwardRefExoticComponent<ArrowDownCircleDashedProps & RefAttributes<Svg>>;

export default ArrowDownCircleDashed;
export { ArrowDownCircleDashed };
