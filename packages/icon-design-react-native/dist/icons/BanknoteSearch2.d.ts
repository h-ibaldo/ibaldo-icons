import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteSearch2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteSearch2: ForwardRefExoticComponent<BanknoteSearch2Props & RefAttributes<Svg>>;

export default BanknoteSearch2;
export { BanknoteSearch2 };
