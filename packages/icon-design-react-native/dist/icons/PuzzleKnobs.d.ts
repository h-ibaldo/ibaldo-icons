import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PuzzleKnobsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PuzzleKnobs: ForwardRefExoticComponent<PuzzleKnobsProps & RefAttributes<Svg>>;

export default PuzzleKnobs;
export { PuzzleKnobs };
