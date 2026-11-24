import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeftCircle: ForwardRefExoticComponent<ChevronLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeftCircle;
export { ChevronLeftCircle };
