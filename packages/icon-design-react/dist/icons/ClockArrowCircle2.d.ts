import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowCircle2: ForwardRefExoticComponent<ClockArrowCircle2Props & RefAttributes<SVGSVGElement>>;

export default ClockArrowCircle2;
export { ClockArrowCircle2 };
