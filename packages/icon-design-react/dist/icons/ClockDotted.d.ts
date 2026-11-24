import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDotted: ForwardRefExoticComponent<ClockDottedProps & RefAttributes<SVGSVGElement>>;

export default ClockDotted;
export { ClockDotted };
