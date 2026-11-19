import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlaySquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlaySquare: ForwardRefExoticComponent<PlaySquareProps & RefAttributes<Svg>>;

export default PlaySquare;
export { PlaySquare };
