import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPrinterTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPrinterTall: ForwardRefExoticComponent<CloudPrinterTallProps & RefAttributes<SVGSVGElement>>;

export default CloudPrinterTall;
export { CloudPrinterTall };
