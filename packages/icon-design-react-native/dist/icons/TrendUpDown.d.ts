import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrendUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrendUpDown: ForwardRefExoticComponent<TrendUpDownProps & RefAttributes<Svg>>;

export default TrendUpDown;
export { TrendUpDown };
