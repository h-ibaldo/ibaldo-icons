import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanRescan3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanRescan3: ForwardRefExoticComponent<ScanRescan3Props & RefAttributes<SVGSVGElement>>;

export default ScanRescan3;
export { ScanRescan3 };
