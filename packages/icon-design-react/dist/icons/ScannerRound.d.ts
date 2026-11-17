import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScannerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScannerRound: ForwardRefExoticComponent<ScannerRoundProps & RefAttributes<SVGSVGElement>>;

export default ScannerRound;
export { ScannerRound };
