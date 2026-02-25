import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle42: ForwardRefExoticComponent<Puzzle42Props & RefAttributes<SVGSVGElement>>;

export default Puzzle42;
export { Puzzle42 };
