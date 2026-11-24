import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeBan: ForwardRefExoticComponent<VolumeBanProps & RefAttributes<SVGSVGElement>>;

export default VolumeBan;
export { VolumeBan };
