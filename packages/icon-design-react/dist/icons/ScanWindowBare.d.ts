import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanWindowBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanWindowBare: ForwardRefExoticComponent<ScanWindowBareProps & RefAttributes<SVGSVGElement>>;

export default ScanWindowBare;
export { ScanWindowBare };
