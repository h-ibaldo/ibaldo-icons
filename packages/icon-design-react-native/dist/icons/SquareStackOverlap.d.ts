import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackOverlap: ForwardRefExoticComponent<SquareStackOverlapProps & RefAttributes<Svg>>;

export default SquareStackOverlap;
export { SquareStackOverlap };
