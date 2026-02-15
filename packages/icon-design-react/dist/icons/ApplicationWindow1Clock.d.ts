import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow1ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow1Clock: ForwardRefExoticComponent<ApplicationWindow1ClockProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow1Clock;
export { ApplicationWindow1Clock };
