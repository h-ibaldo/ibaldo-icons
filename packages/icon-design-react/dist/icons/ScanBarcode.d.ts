import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanBarcodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanBarcode: ForwardRefExoticComponent<ScanBarcodeProps & RefAttributes<SVGSVGElement>>;

export default ScanBarcode;
export { ScanBarcode };
