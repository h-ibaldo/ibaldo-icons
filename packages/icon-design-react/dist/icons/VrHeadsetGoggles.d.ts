import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrHeadsetGogglesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrHeadsetGoggles: ForwardRefExoticComponent<VrHeadsetGogglesProps & RefAttributes<SVGSVGElement>>;

export default VrHeadsetGoggles;
export { VrHeadsetGoggles };
