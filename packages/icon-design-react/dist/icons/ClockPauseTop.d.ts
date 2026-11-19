import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPauseTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPauseTop: ForwardRefExoticComponent<ClockPauseTopProps & RefAttributes<SVGSVGElement>>;

export default ClockPauseTop;
export { ClockPauseTop };
