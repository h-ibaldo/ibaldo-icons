import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceCurlyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceCurly: ForwardRefExoticComponent<AvatarFaceCurlyProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceCurly;
export { AvatarFaceCurly };
