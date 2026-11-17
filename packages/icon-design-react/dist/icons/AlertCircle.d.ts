import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertCircle: ForwardRefExoticComponent<AlertCircleProps & RefAttributes<SVGSVGElement>>;

export default AlertCircle;
export { AlertCircle };
