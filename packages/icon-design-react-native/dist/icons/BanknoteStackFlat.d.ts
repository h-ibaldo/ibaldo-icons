import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteStackFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteStackFlat: ForwardRefExoticComponent<BanknoteStackFlatProps & RefAttributes<Svg>>;

export default BanknoteStackFlat;
export { BanknoteStackFlat };
