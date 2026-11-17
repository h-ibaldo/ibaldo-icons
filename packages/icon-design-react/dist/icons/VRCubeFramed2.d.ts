import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRCubeFramed2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRCubeFramed2: ForwardRefExoticComponent<VRCubeFramed2Props & RefAttributes<SVGSVGElement>>;

export default VRCubeFramed2;
export { VRCubeFramed2 };
