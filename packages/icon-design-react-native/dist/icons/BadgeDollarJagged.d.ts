import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeDollarJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeDollarJagged: ForwardRefExoticComponent<BadgeDollarJaggedProps & RefAttributes<Svg>>;

export default BadgeDollarJagged;
export { BadgeDollarJagged };
