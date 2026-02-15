import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowCircle: ForwardRefExoticComponent<ClockArrowCircleProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowCircle;
export { ClockArrowCircle };
