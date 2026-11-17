import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3XCircle: ForwardRefExoticComponent<Bell3XCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell3XCircle;
export { Bell3XCircle };
