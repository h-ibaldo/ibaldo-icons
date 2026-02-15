import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle2: ForwardRefExoticComponent<Puzzle2Props & RefAttributes<SVGSVGElement>>;

export default Puzzle2;
export { Puzzle2 };
