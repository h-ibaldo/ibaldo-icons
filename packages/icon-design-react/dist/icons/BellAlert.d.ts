import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellAlert: ForwardRefExoticComponent<BellAlertProps & RefAttributes<SVGSVGElement>>;

export default BellAlert;
export { BellAlert };
