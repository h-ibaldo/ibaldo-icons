import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerFrontProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerFront: ForwardRefExoticComponent<ScannerFrontProps & RefAttributes<SVGSVGElement>>;

export default ScannerFront;
export { ScannerFront };
