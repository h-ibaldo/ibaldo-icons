import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CakeCandlesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CakeCandles: ForwardRefExoticComponent<CakeCandlesProps & RefAttributes<Svg>>;

export default CakeCandles;
export { CakeCandles };
