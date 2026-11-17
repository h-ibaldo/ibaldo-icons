import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowPlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowPlus2: ForwardRefExoticComponent<ApplicationWindowPlus2Props & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowPlus2;
export { ApplicationWindowPlus2 };
