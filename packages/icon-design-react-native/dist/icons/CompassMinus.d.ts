import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassMinus: ForwardRefExoticComponent<CompassMinusProps & RefAttributes<Svg>>;

export default CompassMinus;
export { CompassMinus };
