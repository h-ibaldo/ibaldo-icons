import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner1: ForwardRefExoticComponent<ScanScanner1Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner1;
export { ScanScanner1 };
