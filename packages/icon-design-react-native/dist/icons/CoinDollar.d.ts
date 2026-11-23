import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CoinDollarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CoinDollar: ForwardRefExoticComponent<CoinDollarProps & RefAttributes<Svg>>;

export default CoinDollar;
export { CoinDollar };
