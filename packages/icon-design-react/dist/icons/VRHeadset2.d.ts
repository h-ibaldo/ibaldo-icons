import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRHeadset2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRHeadset2: ForwardRefExoticComponent<VRHeadset2Props & RefAttributes<SVGSVGElement>>;

export default VRHeadset2;
export { VRHeadset2 };
