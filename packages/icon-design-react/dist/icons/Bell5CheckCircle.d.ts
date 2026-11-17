import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5CheckCircle: ForwardRefExoticComponent<Bell5CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell5CheckCircle;
export { Bell5CheckCircle };
