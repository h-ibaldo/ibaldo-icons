import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Angle: ForwardRefExoticComponent<Bell5AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell5Angle;
export { Bell5Angle };
