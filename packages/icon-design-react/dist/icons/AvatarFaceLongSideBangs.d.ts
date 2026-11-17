import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongSideBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongSideBangs: ForwardRefExoticComponent<AvatarFaceLongSideBangsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongSideBangs;
export { AvatarFaceLongSideBangs };
