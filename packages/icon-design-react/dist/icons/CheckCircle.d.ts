import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircle: ForwardRefExoticComponent<CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckCircle;
export { CheckCircle };
