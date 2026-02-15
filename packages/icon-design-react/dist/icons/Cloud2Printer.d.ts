import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2PrinterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Printer: ForwardRefExoticComponent<Cloud2PrinterProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Printer;
export { Cloud2Printer };
