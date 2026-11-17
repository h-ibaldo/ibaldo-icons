import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongCenterPart: ForwardRefExoticComponent<AvatarFaceLongCenterPartProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongCenterPart;
export { AvatarFaceLongCenterPart };
