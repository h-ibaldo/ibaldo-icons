import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner5: ForwardRefExoticComponent<ScanScanner5Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner5;
export { ScanScanner5 };
