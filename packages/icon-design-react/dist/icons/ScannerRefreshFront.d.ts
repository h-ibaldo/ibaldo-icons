import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRefreshFrontProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRefreshFront: ForwardRefExoticComponent<ScannerRefreshFrontProps & RefAttributes<SVGSVGElement>>;

export default ScannerRefreshFront;
export { ScannerRefreshFront };
