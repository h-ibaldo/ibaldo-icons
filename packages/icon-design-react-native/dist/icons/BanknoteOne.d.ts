import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteOne: ForwardRefExoticComponent<BanknoteOneProps & RefAttributes<Svg>>;

export default BanknoteOne;
export { BanknoteOne };
