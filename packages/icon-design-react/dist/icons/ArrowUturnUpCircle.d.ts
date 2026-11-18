import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnUpCircle: ForwardRefExoticComponent<ArrowUturnUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnUpCircle;
export { ArrowUturnUpCircle };
