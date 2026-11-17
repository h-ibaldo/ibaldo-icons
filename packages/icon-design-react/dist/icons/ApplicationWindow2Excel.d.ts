import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2ExcelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Excel: ForwardRefExoticComponent<ApplicationWindow2ExcelProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Excel;
export { ApplicationWindow2Excel };
