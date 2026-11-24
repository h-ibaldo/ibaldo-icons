import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSquare: ForwardRefExoticComponent<WindowSquareProps & RefAttributes<Svg>>;

export default WindowSquare;
export { WindowSquare };
