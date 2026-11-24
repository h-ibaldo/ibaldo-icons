import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowDown: ForwardRefExoticComponent<BanknoteArrowDownProps & RefAttributes<Svg>>;

export default BanknoteArrowDown;
export { BanknoteArrowDown };
