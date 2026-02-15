import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner2: ForwardRefExoticComponent<ScanScanner2Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner2;
export { ScanScanner2 };
