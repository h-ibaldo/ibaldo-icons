import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2CircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Circle: ForwardRefExoticComponent<Bell2CircleProps & RefAttributes<SVGSVGElement>>;

export default Bell2Circle;
export { Bell2Circle };
