import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrendDownSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrendDownSmall: ForwardRefExoticComponent<TrendDownSmallProps & RefAttributes<Svg>>;

export default TrendDownSmall;
export { TrendDownSmall };
