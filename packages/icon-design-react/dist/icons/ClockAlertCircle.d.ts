import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAlertCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAlertCircle: ForwardRefExoticComponent<ClockAlertCircleProps & RefAttributes<SVGSVGElement>>;

export default ClockAlertCircle;
export { ClockAlertCircle };
