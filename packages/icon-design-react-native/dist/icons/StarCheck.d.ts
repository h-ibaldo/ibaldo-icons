import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarCheck: ForwardRefExoticComponent<StarCheckProps & RefAttributes<Svg>>;

export default StarCheck;
export { StarCheck };
