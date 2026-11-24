import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownLeftCircle: ForwardRefExoticComponent<ChevronDownLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownLeftCircle;
export { ChevronDownLeftCircle };
