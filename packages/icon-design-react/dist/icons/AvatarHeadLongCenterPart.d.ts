import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadLongCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadLongCenterPart: ForwardRefExoticComponent<AvatarHeadLongCenterPartProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadLongCenterPart;
export { AvatarHeadLongCenterPart };
