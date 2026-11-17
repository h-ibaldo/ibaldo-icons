import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowRocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowRocket: ForwardRefExoticComponent<ApplicationWindowRocketProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowRocket;
export { ApplicationWindowRocket };
