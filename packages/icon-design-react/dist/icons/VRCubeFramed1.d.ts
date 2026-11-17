import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRCubeFramed1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRCubeFramed1: ForwardRefExoticComponent<VRCubeFramed1Props & RefAttributes<SVGSVGElement>>;

export default VRCubeFramed1;
export { VRCubeFramed1 };
