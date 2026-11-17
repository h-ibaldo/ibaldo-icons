import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowAdd: ForwardRefExoticComponent<ApplicationWindowAddProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowAdd;
export { ApplicationWindowAdd };
