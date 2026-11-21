import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanBeamProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanBeam: ForwardRefExoticComponent<ScanBeamProps & RefAttributes<SVGSVGElement>>;

export default ScanBeam;
export { ScanBeam };
