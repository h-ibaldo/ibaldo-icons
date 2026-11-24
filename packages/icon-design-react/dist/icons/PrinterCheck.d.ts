import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PrinterCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PrinterCheck: ForwardRefExoticComponent<PrinterCheckProps & RefAttributes<SVGSVGElement>>;

export default PrinterCheck;
export { PrinterCheck };
