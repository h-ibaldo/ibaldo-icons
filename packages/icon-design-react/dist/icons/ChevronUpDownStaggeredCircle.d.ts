import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpDownStaggeredCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpDownStaggeredCircle: ForwardRefExoticComponent<ChevronUpDownStaggeredCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpDownStaggeredCircle;
export { ChevronUpDownStaggeredCircle };
