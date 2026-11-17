import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanEyeLidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanEyeLid: ForwardRefExoticComponent<ScanEyeLidProps & RefAttributes<SVGSVGElement>>;

export default ScanEyeLid;
export { ScanEyeLid };
