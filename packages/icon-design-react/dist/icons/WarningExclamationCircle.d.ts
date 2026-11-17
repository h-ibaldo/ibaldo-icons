import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningExclamationCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningExclamationCircle: ForwardRefExoticComponent<WarningExclamationCircleProps & RefAttributes<SVGSVGElement>>;

export default WarningExclamationCircle;
export { WarningExclamationCircle };
