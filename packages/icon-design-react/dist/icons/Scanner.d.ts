import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scanner: ForwardRefExoticComponent<ScannerProps & RefAttributes<SVGSVGElement>>;

export default Scanner;
export { Scanner };
