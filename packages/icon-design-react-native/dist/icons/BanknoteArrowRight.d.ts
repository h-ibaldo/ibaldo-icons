import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowRight: ForwardRefExoticComponent<BanknoteArrowRightProps & RefAttributes<Svg>>;

export default BanknoteArrowRight;
export { BanknoteArrowRight };
