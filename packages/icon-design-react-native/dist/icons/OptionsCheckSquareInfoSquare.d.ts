import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckSquareInfoSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckSquareInfoSquare: ForwardRefExoticComponent<OptionsCheckSquareInfoSquareProps & RefAttributes<Svg>>;

export default OptionsCheckSquareInfoSquare;
export { OptionsCheckSquareInfoSquare };
