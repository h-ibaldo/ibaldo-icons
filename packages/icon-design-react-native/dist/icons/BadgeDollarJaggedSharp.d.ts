import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BadgeDollarJaggedSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BadgeDollarJaggedSharp: ForwardRefExoticComponent<BadgeDollarJaggedSharpProps & RefAttributes<Svg>>;

export default BadgeDollarJaggedSharp;
export { BadgeDollarJaggedSharp };
