import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceShortCombedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceShortCombed: ForwardRefExoticComponent<AvatarFaceShortCombedProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceShortCombed;
export { AvatarFaceShortCombed };
