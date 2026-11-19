import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PuzzleGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PuzzleGrid: ForwardRefExoticComponent<PuzzleGridProps & RefAttributes<Svg>>;

export default PuzzleGrid;
export { PuzzleGrid };
