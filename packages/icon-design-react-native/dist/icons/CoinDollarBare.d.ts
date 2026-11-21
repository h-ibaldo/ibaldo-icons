import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CoinDollarBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CoinDollarBare: ForwardRefExoticComponent<CoinDollarBareProps & RefAttributes<Svg>>;

export default CoinDollarBare;
export { CoinDollarBare };
