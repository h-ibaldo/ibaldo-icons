import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrendDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrendDown: ForwardRefExoticComponent<TrendDownProps & RefAttributes<Svg>>;

export default TrendDown;
export { TrendDown };
