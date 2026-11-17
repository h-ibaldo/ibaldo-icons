import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceCurlyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceCurlyBob: ForwardRefExoticComponent<AvatarFaceCurlyBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceCurlyBob;
export { AvatarFaceCurlyBob };
