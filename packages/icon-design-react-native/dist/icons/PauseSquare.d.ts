import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PauseSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PauseSquare: ForwardRefExoticComponent<PauseSquareProps & RefAttributes<Svg>>;

export default PauseSquare;
export { PauseSquare };
