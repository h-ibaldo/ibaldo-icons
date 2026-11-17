import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRDeviceCubeCenteredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRDeviceCubeCentered: ForwardRefExoticComponent<VRDeviceCubeCenteredProps & RefAttributes<SVGSVGElement>>;

export default VRDeviceCubeCentered;
export { VRDeviceCubeCentered };
