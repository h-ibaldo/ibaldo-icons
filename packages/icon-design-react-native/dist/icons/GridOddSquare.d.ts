import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridOddSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridOddSquare: ForwardRefExoticComponent<GridOddSquareProps & RefAttributes<Svg>>;

export default GridOddSquare;
export { GridOddSquare };
