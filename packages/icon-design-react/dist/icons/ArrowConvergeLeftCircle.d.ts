import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeLeftCircle: ForwardRefExoticComponent<ArrowConvergeLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeLeftCircle;
export { ArrowConvergeLeftCircle };
