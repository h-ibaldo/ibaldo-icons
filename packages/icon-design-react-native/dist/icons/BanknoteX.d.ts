import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteX: ForwardRefExoticComponent<BanknoteXProps & RefAttributes<Svg>>;

export default BanknoteX;
export { BanknoteX };
