import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Angle: ForwardRefExoticComponent<Bell4AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell4Angle;
export { Bell4Angle };
