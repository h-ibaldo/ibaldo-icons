import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceFlatTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceFlatTop: ForwardRefExoticComponent<AvatarFaceFlatTopProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceFlatTop;
export { AvatarFaceFlatTop };
