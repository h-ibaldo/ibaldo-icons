import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper1: ForwardRefExoticComponent<Newspaper1Props & RefAttributes<SVGSVGElement>>;

export default Newspaper1;
export { Newspaper1 };
