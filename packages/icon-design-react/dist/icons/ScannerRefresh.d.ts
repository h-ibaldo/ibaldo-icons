import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRefresh: ForwardRefExoticComponent<ScannerRefreshProps & RefAttributes<SVGSVGElement>>;

export default ScannerRefresh;
export { ScannerRefresh };
