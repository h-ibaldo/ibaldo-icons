import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPrinterRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPrinterRound: ForwardRefExoticComponent<CloudPrinterRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudPrinterRound;
export { CloudPrinterRound };
