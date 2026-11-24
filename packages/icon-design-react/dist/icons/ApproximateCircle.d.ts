import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApproximateCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApproximateCircle: ForwardRefExoticComponent<ApproximateCircleProps & RefAttributes<SVGSVGElement>>;

export default ApproximateCircle;
export { ApproximateCircle };
