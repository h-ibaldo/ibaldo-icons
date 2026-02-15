import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PuzzleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle: ForwardRefExoticComponent<PuzzleProps & RefAttributes<SVGSVGElement>>;

export default Puzzle;
export { Puzzle };
