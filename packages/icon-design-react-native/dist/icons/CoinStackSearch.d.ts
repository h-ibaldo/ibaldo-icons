import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CoinStackSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CoinStackSearch: ForwardRefExoticComponent<CoinStackSearchProps & RefAttributes<Svg>>;

export default CoinStackSearch;
export { CoinStackSearch };
