import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1XCircle: ForwardRefExoticComponent<Bell1XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell1XCircle;
export { Bell1XCircle };
