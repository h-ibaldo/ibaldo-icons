import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSidePartBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSidePartBob: ForwardRefExoticComponent<AvatarFaceSidePartBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSidePartBob;
export { AvatarFaceSidePartBob };
