import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsFourCircleProcessProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsFourCircleProcess: ForwardRefExoticComponent<ArrowsFourCircleProcessProps & RefAttributes<SVGSVGElement>>;

export default ArrowsFourCircleProcess;
export { ArrowsFourCircleProcess };
