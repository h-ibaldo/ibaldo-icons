import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDot: ForwardRefExoticComponent<ClockDotProps & RefAttributes<SVGSVGElement>>;

export default ClockDot;
export { ClockDot };
