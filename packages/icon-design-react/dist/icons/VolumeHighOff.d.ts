import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeHighOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeHighOff: ForwardRefExoticComponent<VolumeHighOffProps & RefAttributes<SVGSVGElement>>;

export default VolumeHighOff;
export { VolumeHighOff };
