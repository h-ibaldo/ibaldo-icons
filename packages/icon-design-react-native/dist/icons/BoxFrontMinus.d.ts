import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxFrontMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxFrontMinus: ForwardRefExoticComponent<BoxFrontMinusProps & RefAttributes<Svg>>;

export default BoxFrontMinus;
export { BoxFrontMinus };
