import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleIn: ForwardRefExoticComponent<ArrowDownCircleInProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleIn;
export { ArrowDownCircleIn };
