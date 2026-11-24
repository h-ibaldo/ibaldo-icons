import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Wrench2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Wrench2: ForwardRefExoticComponent<Wrench2Props & RefAttributes<SVGSVGElement>>;

export default Wrench2;
export { Wrench2 };
