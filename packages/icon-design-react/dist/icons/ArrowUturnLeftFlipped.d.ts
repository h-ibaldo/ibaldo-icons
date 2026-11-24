import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnLeftFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnLeftFlipped: ForwardRefExoticComponent<ArrowUturnLeftFlippedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnLeftFlipped;
export { ArrowUturnLeftFlipped };
