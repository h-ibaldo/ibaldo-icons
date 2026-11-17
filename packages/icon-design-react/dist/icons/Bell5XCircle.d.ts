import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5XCircle: ForwardRefExoticComponent<Bell5XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell5XCircle;
export { Bell5XCircle };
