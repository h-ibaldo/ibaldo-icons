import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TimerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Timer: ForwardRefExoticComponent<TimerProps & RefAttributes<SVGSVGElement>>;

export default Timer;
export { Timer };
