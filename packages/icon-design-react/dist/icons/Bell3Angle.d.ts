import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3AngleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Angle: ForwardRefExoticComponent<Bell3AngleProps & RefAttributes<SVGSVGElement>>;

export default Bell3Angle;
export { Bell3Angle };
