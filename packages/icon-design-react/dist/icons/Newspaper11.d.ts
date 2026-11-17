import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper11: ForwardRefExoticComponent<Newspaper11Props & RefAttributes<SVGSVGElement>>;

export default Newspaper11;
export { Newspaper11 };
