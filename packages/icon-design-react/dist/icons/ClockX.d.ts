import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockX: ForwardRefExoticComponent<ClockXProps & RefAttributes<SVGSVGElement>>;

export default ClockX;
export { ClockX };
