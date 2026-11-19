import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinimizeSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinimizeSquare: ForwardRefExoticComponent<MinimizeSquareProps & RefAttributes<Svg>>;

export default MinimizeSquare;
export { MinimizeSquare };
