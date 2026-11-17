import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtAlert: ForwardRefExoticComponent<AtAlertProps & RefAttributes<SVGSVGElement>>;

export default AtAlert;
export { AtAlert };
