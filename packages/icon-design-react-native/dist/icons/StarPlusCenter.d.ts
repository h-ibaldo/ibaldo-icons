import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarPlusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarPlusCenter: ForwardRefExoticComponent<StarPlusCenterProps & RefAttributes<Svg>>;

export default StarPlusCenter;
export { StarPlusCenter };
