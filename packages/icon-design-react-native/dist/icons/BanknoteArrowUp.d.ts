import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowUp: ForwardRefExoticComponent<BanknoteArrowUpProps & RefAttributes<Svg>>;

export default BanknoteArrowUp;
export { BanknoteArrowUp };
