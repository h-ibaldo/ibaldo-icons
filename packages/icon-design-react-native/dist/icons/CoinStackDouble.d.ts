import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CoinStackDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CoinStackDouble: ForwardRefExoticComponent<CoinStackDoubleProps & RefAttributes<Svg>>;

export default CoinStackDouble;
export { CoinStackDouble };
