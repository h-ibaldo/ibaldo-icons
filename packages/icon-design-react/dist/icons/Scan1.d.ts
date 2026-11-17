import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scan1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scan1: ForwardRefExoticComponent<Scan1Props & RefAttributes<SVGSVGElement>>;

export default Scan1;
export { Scan1 };
