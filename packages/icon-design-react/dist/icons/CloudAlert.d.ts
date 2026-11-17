import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAlert: ForwardRefExoticComponent<CloudAlertProps & RefAttributes<SVGSVGElement>>;

export default CloudAlert;
export { CloudAlert };
