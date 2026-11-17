import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6XCircle: ForwardRefExoticComponent<Bell6XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell6XCircle;
export { Bell6XCircle };
