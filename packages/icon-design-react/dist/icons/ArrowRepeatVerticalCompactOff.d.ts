import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatVerticalCompactOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatVerticalCompactOff: ForwardRefExoticComponent<ArrowRepeatVerticalCompactOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatVerticalCompactOff;
export { ArrowRepeatVerticalCompactOff };
