import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRHeadset1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRHeadset1: ForwardRefExoticComponent<VRHeadset1Props & RefAttributes<SVGSVGElement>>;

export default VRHeadset1;
export { VRHeadset1 };
