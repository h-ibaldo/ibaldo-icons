import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackSquare: ForwardRefExoticComponent<SkipBackSquareProps & RefAttributes<Svg>>;

export default SkipBackSquare;
export { SkipBackSquare };
