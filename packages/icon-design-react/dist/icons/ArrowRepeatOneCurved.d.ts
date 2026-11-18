import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatOneCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatOneCurved: ForwardRefExoticComponent<ArrowRepeatOneCurvedProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatOneCurved;
export { ArrowRepeatOneCurved };
