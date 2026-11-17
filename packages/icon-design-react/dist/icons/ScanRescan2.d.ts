import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanRescan2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanRescan2: ForwardRefExoticComponent<ScanRescan2Props & RefAttributes<SVGSVGElement>>;

export default ScanRescan2;
export { ScanRescan2 };
