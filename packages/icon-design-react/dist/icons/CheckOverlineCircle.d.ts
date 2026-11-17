import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckOverlineCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckOverlineCircle: ForwardRefExoticComponent<CheckOverlineCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckOverlineCircle;
export { CheckOverlineCircle };
