import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5CircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Circle: ForwardRefExoticComponent<Bell5CircleProps & RefAttributes<SVGSVGElement>>;

export default Bell5Circle;
export { Bell5Circle };
