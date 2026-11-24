import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteStack: ForwardRefExoticComponent<BanknoteStackProps & RefAttributes<Svg>>;

export default BanknoteStack;
export { BanknoteStack };
