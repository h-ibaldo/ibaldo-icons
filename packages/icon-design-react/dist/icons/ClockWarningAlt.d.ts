import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockWarningAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockWarningAlt: ForwardRefExoticComponent<ClockWarningAltProps & RefAttributes<SVGSVGElement>>;

export default ClockWarningAlt;
export { ClockWarningAlt };
