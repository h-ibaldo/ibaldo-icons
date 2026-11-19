import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanknoteSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanknoteSearch: ForwardRefExoticComponent<BanknoteSearchProps & RefAttributes<Svg>>;

export default BanknoteSearch;
export { BanknoteSearch };
