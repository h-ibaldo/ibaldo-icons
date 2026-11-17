import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper3: ForwardRefExoticComponent<Newspaper3Props & RefAttributes<SVGSVGElement>>;

export default Newspaper3;
export { Newspaper3 };
