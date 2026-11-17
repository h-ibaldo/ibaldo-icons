import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2SearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Search: ForwardRefExoticComponent<ApplicationWindow2SearchProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Search;
export { ApplicationWindow2Search };
