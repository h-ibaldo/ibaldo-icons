import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrHeadsetUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrHeadsetUser: ForwardRefExoticComponent<VrHeadsetUserProps & RefAttributes<SVGSVGElement>>;

export default VrHeadsetUser;
export { VrHeadsetUser };
