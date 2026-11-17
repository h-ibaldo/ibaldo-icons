import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeLowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeLow: ForwardRefExoticComponent<VolumeLowProps & RefAttributes<SVGSVGElement>>;

export default VolumeLow;
export { VolumeLow };
