import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanRescan1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanRescan1: ForwardRefExoticComponent<ScanRescan1Props & RefAttributes<SVGSVGElement>>;

export default ScanRescan1;
export { ScanRescan1 };
