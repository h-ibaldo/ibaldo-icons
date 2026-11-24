import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeOff: ForwardRefExoticComponent<VolumeOffProps & RefAttributes<SVGSVGElement>>;

export default VolumeOff;
export { VolumeOff };
