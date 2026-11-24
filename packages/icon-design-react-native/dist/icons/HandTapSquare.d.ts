import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapSquare: ForwardRefExoticComponent<HandTapSquareProps & RefAttributes<Svg>>;

export default HandTapSquare;
export { HandTapSquare };
