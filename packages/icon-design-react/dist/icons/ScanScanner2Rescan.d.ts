import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner2RescanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner2Rescan: ForwardRefExoticComponent<ScanScanner2RescanProps & RefAttributes<SVGSVGElement>>;

export default ScanScanner2Rescan;
export { ScanScanner2Rescan };
