import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceCurlyTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceCurlyTop: ForwardRefExoticComponent<AvatarFaceCurlyTopProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceCurlyTop;
export { AvatarFaceCurlyTop };
