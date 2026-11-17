import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpFromPointCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpFromPointCircle: ForwardRefExoticComponent<ArrowUpFromPointCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpFromPointCircle;
export { ArrowUpFromPointCircle };
