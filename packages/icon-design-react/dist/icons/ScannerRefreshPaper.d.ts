import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRefreshPaperProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRefreshPaper: ForwardRefExoticComponent<ScannerRefreshPaperProps & RefAttributes<SVGSVGElement>>;

export default ScannerRefreshPaper;
export { ScannerRefreshPaper };
