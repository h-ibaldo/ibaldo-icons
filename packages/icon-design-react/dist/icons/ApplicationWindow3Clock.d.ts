import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow3ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow3Clock: ForwardRefExoticComponent<ApplicationWindow3ClockProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow3Clock;
export { ApplicationWindow3Clock };
