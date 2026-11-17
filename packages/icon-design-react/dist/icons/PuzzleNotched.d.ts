import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PuzzleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PuzzleNotched: ForwardRefExoticComponent<PuzzleNotchedProps & RefAttributes<SVGSVGElement>>;

export default PuzzleNotched;
export { PuzzleNotched };
