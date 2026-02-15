import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner1RescanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner1Rescan: ForwardRefExoticComponent<ScanScanner1RescanProps & RefAttributes<SVGSVGElement>>;

export default ScanScanner1Rescan;
export { ScanScanner1Rescan };
