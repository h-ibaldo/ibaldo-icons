import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PuzzleGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PuzzleGrid: ForwardRefExoticComponent<PuzzleGridProps & RefAttributes<SVGSVGElement>>;

export default PuzzleGrid;
export { PuzzleGrid };
