import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrendUpDownSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrendUpDownSmall: ForwardRefExoticComponent<TrendUpDownSmallProps & RefAttributes<Svg>>;

export default TrendUpDownSmall;
export { TrendUpDownSmall };
