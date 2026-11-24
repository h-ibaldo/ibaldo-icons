import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanVideoSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanVideoSmall: ForwardRefExoticComponent<ScanVideoSmallProps & RefAttributes<SVGSVGElement>>;

export default ScanVideoSmall;
export { ScanVideoSmall };
