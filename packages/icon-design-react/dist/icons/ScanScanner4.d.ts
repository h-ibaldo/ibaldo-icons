import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanScanner4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanScanner4: ForwardRefExoticComponent<ScanScanner4Props & RefAttributes<SVGSVGElement>>;

export default ScanScanner4;
export { ScanScanner4 };
