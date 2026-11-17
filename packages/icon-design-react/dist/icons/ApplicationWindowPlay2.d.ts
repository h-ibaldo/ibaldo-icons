import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowPlay2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowPlay2: ForwardRefExoticComponent<ApplicationWindowPlay2Props & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowPlay2;
export { ApplicationWindowPlay2 };
