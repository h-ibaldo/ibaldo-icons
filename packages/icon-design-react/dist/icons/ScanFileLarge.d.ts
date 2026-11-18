import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFileLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFileLarge: ForwardRefExoticComponent<ScanFileLargeProps & RefAttributes<SVGSVGElement>>;

export default ScanFileLarge;
export { ScanFileLarge };
