import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPrinterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPrinter: ForwardRefExoticComponent<CloudPrinterProps & RefAttributes<SVGSVGElement>>;

export default CloudPrinter;
export { CloudPrinter };
