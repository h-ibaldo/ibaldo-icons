import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanSquare: ForwardRefExoticComponent<ScanSquareProps & RefAttributes<SVGSVGElement>>;

export default ScanSquare;
export { ScanSquare };
