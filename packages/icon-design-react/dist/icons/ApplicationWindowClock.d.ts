import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowClock: ForwardRefExoticComponent<ApplicationWindowClockProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowClock;
export { ApplicationWindowClock };
