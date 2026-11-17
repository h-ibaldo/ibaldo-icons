import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowCheck: ForwardRefExoticComponent<ApplicationWindowCheckProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowCheck;
export { ApplicationWindowCheck };
