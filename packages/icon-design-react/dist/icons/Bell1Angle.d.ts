import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1Angle: ForwardRefExoticComponent<Bell1AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell1Angle;
export { Bell1Angle };
