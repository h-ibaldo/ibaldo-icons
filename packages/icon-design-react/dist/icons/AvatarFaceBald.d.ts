import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceBaldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceBald: ForwardRefExoticComponent<AvatarFaceBaldProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceBald;
export { AvatarFaceBald };
