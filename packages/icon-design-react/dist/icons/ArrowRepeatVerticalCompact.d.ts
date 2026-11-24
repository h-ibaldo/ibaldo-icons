import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatVerticalCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatVerticalCompact: ForwardRefExoticComponent<ArrowRepeatVerticalCompactProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatVerticalCompact;
export { ArrowRepeatVerticalCompact };
