import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SirenAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SirenAlert: ForwardRefExoticComponent<SirenAlertProps & RefAttributes<SVGSVGElement>>;

export default SirenAlert;
export { SirenAlert };
