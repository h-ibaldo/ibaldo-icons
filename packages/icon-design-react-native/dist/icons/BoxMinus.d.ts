import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxMinus: ForwardRefExoticComponent<BoxMinusProps & RefAttributes<Svg>>;

export default BoxMinus;
export { BoxMinus };
