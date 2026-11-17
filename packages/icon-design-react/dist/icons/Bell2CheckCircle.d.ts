import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2CheckCircle: ForwardRefExoticComponent<Bell2CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell2CheckCircle;
export { Bell2CheckCircle };
