import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSwoopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSwoop: ForwardRefExoticComponent<AvatarFaceSwoopProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSwoop;
export { AvatarFaceSwoop };
