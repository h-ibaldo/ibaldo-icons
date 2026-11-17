import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowPlus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowPlus1: ForwardRefExoticComponent<ApplicationWindowPlus1Props & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowPlus1;
export { ApplicationWindowPlus1 };
