import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PuzzleGridMissingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PuzzleGridMissing: ForwardRefExoticComponent<PuzzleGridMissingProps & RefAttributes<SVGSVGElement>>;

export default PuzzleGridMissing;
export { PuzzleGridMissing };
