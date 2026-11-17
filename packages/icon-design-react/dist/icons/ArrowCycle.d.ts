import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCycleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCycle: ForwardRefExoticComponent<ArrowCycleProps & RefAttributes<SVGSVGElement>>;

export default ArrowCycle;
export { ArrowCycle };
