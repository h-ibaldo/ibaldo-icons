import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFacePompadourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFacePompadour: ForwardRefExoticComponent<AvatarFacePompadourProps & RefAttributes<SVGSVGElement>>;

export default AvatarFacePompadour;
export { AvatarFacePompadour };
