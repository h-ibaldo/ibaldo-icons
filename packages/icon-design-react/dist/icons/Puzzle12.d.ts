import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle12: ForwardRefExoticComponent<Puzzle12Props & RefAttributes<SVGSVGElement>>;

export default Puzzle12;
export { Puzzle12 };
