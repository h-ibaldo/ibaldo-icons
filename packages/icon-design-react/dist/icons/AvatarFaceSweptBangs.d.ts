import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSweptBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSweptBangs: ForwardRefExoticComponent<AvatarFaceSweptBangsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSweptBangs;
export { AvatarFaceSweptBangs };
