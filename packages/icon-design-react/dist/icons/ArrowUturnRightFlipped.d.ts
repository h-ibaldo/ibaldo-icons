import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnRightFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnRightFlipped: ForwardRefExoticComponent<ArrowUturnRightFlippedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnRightFlipped;
export { ArrowUturnRightFlipped };
