import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagTaperedDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagTaperedDots: ForwardRefExoticComponent<BagTaperedDotsProps & RefAttributes<Svg>>;

export default BagTaperedDots;
export { BagTaperedDots };
