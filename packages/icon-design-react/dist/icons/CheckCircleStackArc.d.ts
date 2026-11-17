import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleStackArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleStackArc: ForwardRefExoticComponent<CheckCircleStackArcProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleStackArc;
export { CheckCircleStackArc };
