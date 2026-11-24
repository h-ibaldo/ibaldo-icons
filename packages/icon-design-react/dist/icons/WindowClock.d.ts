import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowClock: ForwardRefExoticComponent<WindowClockProps & RefAttributes<SVGSVGElement>>;

export default WindowClock;
export { WindowClock };
