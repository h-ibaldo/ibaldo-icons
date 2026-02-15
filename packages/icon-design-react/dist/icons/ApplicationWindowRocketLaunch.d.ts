import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowRocketLaunchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowRocketLaunch: ForwardRefExoticComponent<ApplicationWindowRocketLaunchProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowRocketLaunch;
export { ApplicationWindowRocketLaunch };
