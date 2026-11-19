import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StethoscopeSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StethoscopeSquare: ForwardRefExoticComponent<StethoscopeSquareProps & RefAttributes<Svg>>;

export default StethoscopeSquare;
export { StethoscopeSquare };
