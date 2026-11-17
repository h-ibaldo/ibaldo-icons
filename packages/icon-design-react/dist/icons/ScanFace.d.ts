import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFace: ForwardRefExoticComponent<ScanFaceProps & RefAttributes<SVGSVGElement>>;

export default ScanFace;
export { ScanFace };
