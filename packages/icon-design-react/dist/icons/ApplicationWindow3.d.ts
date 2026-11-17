import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow3: ForwardRefExoticComponent<ApplicationWindow3Props & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow3;
export { ApplicationWindow3 };
