import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteCheck: ForwardRefExoticComponent<BanknoteCheckProps & RefAttributes<Svg>>;

export default BanknoteCheck;
export { BanknoteCheck };
