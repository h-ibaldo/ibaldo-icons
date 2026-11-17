import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceAfroProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceAfro: ForwardRefExoticComponent<AvatarFaceAfroProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceAfro;
export { AvatarFaceAfro };
