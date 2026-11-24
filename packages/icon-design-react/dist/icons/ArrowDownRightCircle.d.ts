import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightCircle: ForwardRefExoticComponent<ArrowDownRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightCircle;
export { ArrowDownRightCircle };
