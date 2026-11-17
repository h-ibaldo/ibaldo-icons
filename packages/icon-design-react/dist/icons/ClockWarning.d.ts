import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockWarning: ForwardRefExoticComponent<ClockWarningProps & RefAttributes<SVGSVGElement>>;

export default ClockWarning;
export { ClockWarning };
