import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Angle: ForwardRefExoticComponent<Bell2AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell2Angle;
export { Bell2Angle };
