import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnUpFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnUpFlipped: ForwardRefExoticComponent<ArrowUturnUpFlippedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnUpFlipped;
export { ArrowUturnUpFlipped };
