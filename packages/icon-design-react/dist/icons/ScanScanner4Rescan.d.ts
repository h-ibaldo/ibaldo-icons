import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner4RescanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner4Rescan: ForwardRefExoticComponent<ScanScanner4RescanProps & RefAttributes<SVGSVGElement>>;

export default ScanScanner4Rescan;
export { ScanScanner4Rescan };
