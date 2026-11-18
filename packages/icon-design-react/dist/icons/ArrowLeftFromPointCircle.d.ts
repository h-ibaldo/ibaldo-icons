import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftFromPointCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftFromPointCircle: ForwardRefExoticComponent<ArrowLeftFromPointCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftFromPointCircle;
export { ArrowLeftFromPointCircle };
