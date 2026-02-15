import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDots: ForwardRefExoticComponent<ClockDotsProps & RefAttributes<SVGSVGElement>>;

export default ClockDots;
export { ClockDots };
