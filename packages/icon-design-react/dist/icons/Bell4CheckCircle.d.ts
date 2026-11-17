import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4CheckCircle: ForwardRefExoticComponent<Bell4CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell4CheckCircle;
export { Bell4CheckCircle };
