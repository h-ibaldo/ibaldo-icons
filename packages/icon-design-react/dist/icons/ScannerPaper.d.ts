import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerPaperProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerPaper: ForwardRefExoticComponent<ScannerPaperProps & RefAttributes<SVGSVGElement>>;

export default ScannerPaper;
export { ScannerPaper };
