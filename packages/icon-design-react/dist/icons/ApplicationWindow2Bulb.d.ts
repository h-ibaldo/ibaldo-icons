import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2BulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Bulb: ForwardRefExoticComponent<ApplicationWindow2BulbProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Bulb;
export { ApplicationWindow2Bulb };
