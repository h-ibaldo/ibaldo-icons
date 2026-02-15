import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner5RescanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner5Rescan: ForwardRefExoticComponent<ScanScanner5RescanProps & RefAttributes<SVGSVGElement>>;

export default ScanScanner5Rescan;
export { ScanScanner5Rescan };
