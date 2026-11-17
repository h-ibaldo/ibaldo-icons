import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrHeadsetUserSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrHeadsetUserSmall: ForwardRefExoticComponent<VrHeadsetUserSmallProps & RefAttributes<SVGSVGElement>>;

export default VrHeadsetUserSmall;
export { VrHeadsetUserSmall };
