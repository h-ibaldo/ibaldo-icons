import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle1: ForwardRefExoticComponent<Puzzle1Props & RefAttributes<SVGSVGElement>>;

export default Puzzle1;
export { Puzzle1 };
