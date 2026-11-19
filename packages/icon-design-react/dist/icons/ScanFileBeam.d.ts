import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFileBeamProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFileBeam: ForwardRefExoticComponent<ScanFileBeamProps & RefAttributes<SVGSVGElement>>;

export default ScanFileBeam;
export { ScanFileBeam };
