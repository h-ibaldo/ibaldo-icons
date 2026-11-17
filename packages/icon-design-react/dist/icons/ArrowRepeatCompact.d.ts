import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatCompact: ForwardRefExoticComponent<ArrowRepeatCompactProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatCompact;
export { ArrowRepeatCompact };
