import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRHeadset3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRHeadset3: ForwardRefExoticComponent<VRHeadset3Props & RefAttributes<SVGSVGElement>>;

export default VRHeadset3;
export { VRHeadset3 };
