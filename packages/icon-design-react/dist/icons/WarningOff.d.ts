import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningOff: ForwardRefExoticComponent<WarningOffProps & RefAttributes<SVGSVGElement>>;

export default WarningOff;
export { WarningOff };
