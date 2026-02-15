import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner3: ForwardRefExoticComponent<ScanScanner3Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner3;
export { ScanScanner3 };
