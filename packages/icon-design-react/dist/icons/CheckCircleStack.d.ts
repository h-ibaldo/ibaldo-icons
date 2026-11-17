import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleStack: ForwardRefExoticComponent<CheckCircleStackProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleStack;
export { CheckCircleStack };
