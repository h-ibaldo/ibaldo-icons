import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeX: ForwardRefExoticComponent<VolumeXProps & RefAttributes<SVGSVGElement>>;

export default VolumeX;
export { VolumeX };
