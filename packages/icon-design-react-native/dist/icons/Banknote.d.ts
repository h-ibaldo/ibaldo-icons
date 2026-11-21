import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Banknote: ForwardRefExoticComponent<BanknoteProps & RefAttributes<Svg>>;

export default Banknote;
export { Banknote };
