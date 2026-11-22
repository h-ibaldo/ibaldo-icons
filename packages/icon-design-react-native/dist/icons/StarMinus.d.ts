import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarMinus: ForwardRefExoticComponent<StarMinusProps & RefAttributes<Svg>>;

export default StarMinus;
export { StarMinus };
