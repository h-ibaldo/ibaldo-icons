import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerBox: ForwardRefExoticComponent<ScannerBoxProps & RefAttributes<SVGSVGElement>>;

export default ScannerBox;
export { ScannerBox };
