import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRCubeHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRCubeHalf: ForwardRefExoticComponent<VRCubeHalfProps & RefAttributes<SVGSVGElement>>;

export default VRCubeHalf;
export { VRCubeHalf };
