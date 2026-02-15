import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPauseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPause: ForwardRefExoticComponent<ClockPauseProps & RefAttributes<SVGSVGElement>>;

export default ClockPause;
export { ClockPause };
