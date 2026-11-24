import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PuzzleKnobsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PuzzleKnobs: ForwardRefExoticComponent<PuzzleKnobsProps & RefAttributes<SVGSVGElement>>;

export default PuzzleKnobs;
export { PuzzleKnobs };
