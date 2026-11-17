import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4XCircle: ForwardRefExoticComponent<Bell4XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell4XCircle;
export { Bell4XCircle };
