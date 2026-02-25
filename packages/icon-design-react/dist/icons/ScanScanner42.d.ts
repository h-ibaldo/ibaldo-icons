import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner42: ForwardRefExoticComponent<ScanScanner42Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner42;
export { ScanScanner42 };
