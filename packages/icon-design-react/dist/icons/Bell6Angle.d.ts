import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Angle: ForwardRefExoticComponent<Bell6AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell6Angle;
export { Bell6Angle };
