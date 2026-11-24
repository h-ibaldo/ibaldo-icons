import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFile: ForwardRefExoticComponent<ScanFileProps & RefAttributes<SVGSVGElement>>;

export default ScanFile;
export { ScanFile };
