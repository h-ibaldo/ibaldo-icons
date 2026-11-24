import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteArrowLeft: ForwardRefExoticComponent<BanknoteArrowLeftProps & RefAttributes<Svg>>;

export default BanknoteArrowLeft;
export { BanknoteArrowLeft };
