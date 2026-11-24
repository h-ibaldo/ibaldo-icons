import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSnoozeTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSnoozeTop: ForwardRefExoticComponent<ClockSnoozeTopProps & RefAttributes<SVGSVGElement>>;

export default ClockSnoozeTop;
export { ClockSnoozeTop };
