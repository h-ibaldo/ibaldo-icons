import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrHeadsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrHeadset: ForwardRefExoticComponent<VrHeadsetProps & RefAttributes<SVGSVGElement>>;

export default VrHeadset;
export { VrHeadset };
