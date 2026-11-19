import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarHappyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarHappy: ForwardRefExoticComponent<StarHappyProps & RefAttributes<Svg>>;

export default StarHappy;
export { StarHappy };
