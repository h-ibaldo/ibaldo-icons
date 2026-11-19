import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownDiamondProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownDiamond: ForwardRefExoticComponent<ArrowDownDiamondProps & RefAttributes<Svg>>;

export default ArrowDownDiamond;
export { ArrowDownDiamond };
