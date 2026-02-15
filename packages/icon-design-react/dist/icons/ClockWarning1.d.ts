import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockWarning1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockWarning1: ForwardRefExoticComponent<ClockWarning1Props & RefAttributes<SVGSVGElement>>;

export default ClockWarning1;
export { ClockWarning1 };
