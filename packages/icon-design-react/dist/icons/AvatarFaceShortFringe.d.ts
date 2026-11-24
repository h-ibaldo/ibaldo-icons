import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceShortFringeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceShortFringe: ForwardRefExoticComponent<AvatarFaceShortFringeProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceShortFringe;
export { AvatarFaceShortFringe };
