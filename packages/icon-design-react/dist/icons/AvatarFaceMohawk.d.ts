import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceMohawkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceMohawk: ForwardRefExoticComponent<AvatarFaceMohawkProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceMohawk;
export { AvatarFaceMohawk };
