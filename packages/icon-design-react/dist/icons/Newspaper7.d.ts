import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper7: ForwardRefExoticComponent<Newspaper7Props & RefAttributes<SVGSVGElement>>;

export default Newspaper7;
export { Newspaper7 };
