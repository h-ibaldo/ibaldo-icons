import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanSearch: ForwardRefExoticComponent<ScanSearchProps & RefAttributes<SVGSVGElement>>;

export default ScanSearch;
export { ScanSearch };
