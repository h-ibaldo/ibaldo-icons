import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatCompactOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatCompactOff: ForwardRefExoticComponent<ArrowRepeatCompactOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatCompactOff;
export { ArrowRepeatCompactOff };
