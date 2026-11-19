import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PuzzleNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PuzzleNotched: ForwardRefExoticComponent<PuzzleNotchedProps & RefAttributes<Svg>>;

export default PuzzleNotched;
export { PuzzleNotched };
