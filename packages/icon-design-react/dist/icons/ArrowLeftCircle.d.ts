import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftCircle: ForwardRefExoticComponent<ArrowLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftCircle;
export { ArrowLeftCircle };
