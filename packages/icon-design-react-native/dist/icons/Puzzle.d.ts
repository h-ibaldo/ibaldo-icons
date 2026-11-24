import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PuzzleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Puzzle: ForwardRefExoticComponent<PuzzleProps & RefAttributes<Svg>>;

export default Puzzle;
export { Puzzle };
