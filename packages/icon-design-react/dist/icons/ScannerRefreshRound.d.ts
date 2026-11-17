import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRefreshRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRefreshRound: ForwardRefExoticComponent<ScannerRefreshRoundProps & RefAttributes<SVGSVGElement>>;

export default ScannerRefreshRound;
export { ScannerRefreshRound };
