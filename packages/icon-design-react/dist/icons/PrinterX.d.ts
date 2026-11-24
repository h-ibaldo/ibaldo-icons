import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PrinterXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PrinterX: ForwardRefExoticComponent<PrinterXProps & RefAttributes<SVGSVGElement>>;

export default PrinterX;
export { PrinterX };
