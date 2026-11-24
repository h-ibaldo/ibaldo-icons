import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCycle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCycle2: ForwardRefExoticComponent<ArrowCycle2Props & RefAttributes<SVGSVGElement>>;

export default ArrowCycle2;
export { ArrowCycle2 };
