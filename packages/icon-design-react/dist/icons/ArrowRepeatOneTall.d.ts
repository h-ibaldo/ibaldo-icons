import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatOneTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatOneTall: ForwardRefExoticComponent<ArrowRepeatOneTallProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatOneTall;
export { ArrowRepeatOneTall };
