import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2XCircle: ForwardRefExoticComponent<Bell2XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell2XCircle;
export { Bell2XCircle };
