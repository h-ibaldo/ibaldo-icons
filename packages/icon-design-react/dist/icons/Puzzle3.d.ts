import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Puzzle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Puzzle3: ForwardRefExoticComponent<Puzzle3Props & RefAttributes<SVGSVGElement>>;

export default Puzzle3;
export { Puzzle3 };
