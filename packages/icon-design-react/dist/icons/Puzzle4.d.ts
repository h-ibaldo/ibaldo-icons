import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle4: ForwardRefExoticComponent<Puzzle4Props & RefAttributes<SVGSVGElement>>;

export default Puzzle4;
export { Puzzle4 };
