import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatVerticalOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatVerticalOff: ForwardRefExoticComponent<ArrowRepeatVerticalOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatVerticalOff;
export { ArrowRepeatVerticalOff };
