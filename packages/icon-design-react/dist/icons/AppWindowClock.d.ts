import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppWindowClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppWindowClock: ForwardRefExoticComponent<AppWindowClockProps & RefAttributes<SVGSVGElement>>;

export default AppWindowClock;
export { AppWindowClock };
