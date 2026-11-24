import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarHalf: ForwardRefExoticComponent<StarHalfProps & RefAttributes<Svg>>;

export default StarHalf;
export { StarHalf };
