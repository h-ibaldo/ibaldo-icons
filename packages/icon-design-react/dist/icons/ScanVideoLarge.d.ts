import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanVideoLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanVideoLarge: ForwardRefExoticComponent<ScanVideoLargeProps & RefAttributes<SVGSVGElement>>;

export default ScanVideoLarge;
export { ScanVideoLarge };
