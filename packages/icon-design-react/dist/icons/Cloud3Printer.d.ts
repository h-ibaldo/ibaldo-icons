import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3PrinterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Printer: ForwardRefExoticComponent<Cloud3PrinterProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Printer;
export { Cloud3Printer };
