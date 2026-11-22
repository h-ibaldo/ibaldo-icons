import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrendUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrendUp: ForwardRefExoticComponent<TrendUpProps & RefAttributes<Svg>>;

export default TrendUp;
export { TrendUp };
