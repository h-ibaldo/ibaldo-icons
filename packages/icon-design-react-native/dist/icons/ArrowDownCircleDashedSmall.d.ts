import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleDashedSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleDashedSmall: ForwardRefExoticComponent<ArrowDownCircleDashedSmallProps & RefAttributes<Svg>>;

export default ArrowDownCircleDashedSmall;
export { ArrowDownCircleDashedSmall };
