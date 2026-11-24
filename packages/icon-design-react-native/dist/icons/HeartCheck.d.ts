import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartCheck: ForwardRefExoticComponent<HeartCheckProps & RefAttributes<Svg>>;

export default HeartCheck;
export { HeartCheck };
