import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle22: ForwardRefExoticComponent<Puzzle22Props & RefAttributes<SVGSVGElement>>;

export default Puzzle22;
export { Puzzle22 };
