import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFaceRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFaceRound: ForwardRefExoticComponent<ScanFaceRoundProps & RefAttributes<SVGSVGElement>>;

export default ScanFaceRound;
export { ScanFaceRound };
