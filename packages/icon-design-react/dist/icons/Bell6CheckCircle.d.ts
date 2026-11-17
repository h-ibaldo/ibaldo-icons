import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6CheckCircle: ForwardRefExoticComponent<Bell6CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell6CheckCircle;
export { Bell6CheckCircle };
