import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongBangs: ForwardRefExoticComponent<AvatarFaceLongBangsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongBangs;
export { AvatarFaceLongBangs };
