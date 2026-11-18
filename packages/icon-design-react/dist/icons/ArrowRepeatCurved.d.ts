import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatCurved: ForwardRefExoticComponent<ArrowRepeatCurvedProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatCurved;
export { ArrowRepeatCurved };
