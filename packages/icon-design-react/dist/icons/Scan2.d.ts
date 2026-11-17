import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scan2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scan2: ForwardRefExoticComponent<Scan2Props & RefAttributes<SVGSVGElement>>;

export default Scan2;
export { Scan2 };
