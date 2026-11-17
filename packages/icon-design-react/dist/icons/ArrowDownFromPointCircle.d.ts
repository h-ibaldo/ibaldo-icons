import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownFromPointCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownFromPointCircle: ForwardRefExoticComponent<ArrowDownFromPointCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownFromPointCircle;
export { ArrowDownFromPointCircle };
