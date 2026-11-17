import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowsThemesDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowsThemesDotted: ForwardRefExoticComponent<ApplicationWindowsThemesDottedProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowsThemesDotted;
export { ApplicationWindowsThemesDotted };
