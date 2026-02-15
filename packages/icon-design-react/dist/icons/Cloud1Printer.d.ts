import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1PrinterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Printer: ForwardRefExoticComponent<Cloud1PrinterProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Printer;
export { Cloud1Printer };
