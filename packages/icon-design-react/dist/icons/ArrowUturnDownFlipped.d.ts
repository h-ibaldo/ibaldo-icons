import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnDownFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnDownFlipped: ForwardRefExoticComponent<ArrowUturnDownFlippedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnDownFlipped;
export { ArrowUturnDownFlipped };
