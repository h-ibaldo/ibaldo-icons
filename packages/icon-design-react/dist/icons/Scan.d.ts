import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scan: ForwardRefExoticComponent<ScanProps & RefAttributes<SVGSVGElement>>;

export default Scan;
export { Scan };
