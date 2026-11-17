import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowRemove: ForwardRefExoticComponent<ApplicationWindowRemoveProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowRemove;
export { ApplicationWindowRemove };
