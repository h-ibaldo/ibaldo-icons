import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanEye: ForwardRefExoticComponent<ScanEyeProps & RefAttributes<SVGSVGElement>>;

export default ScanEye;
export { ScanEye };
