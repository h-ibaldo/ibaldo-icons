import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRefreshBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRefreshBox: ForwardRefExoticComponent<ScannerRefreshBoxProps & RefAttributes<SVGSVGElement>>;

export default ScannerRefreshBox;
export { ScannerRefreshBox };
