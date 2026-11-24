import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightLeftStaggeredCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRightLeftStaggeredCircle: ForwardRefExoticComponent<ChevronRightLeftStaggeredCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronRightLeftStaggeredCircle;
export { ChevronRightLeftStaggeredCircle };
