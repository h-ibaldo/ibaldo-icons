import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadRoundCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadRoundCenterPart: ForwardRefExoticComponent<AvatarHeadRoundCenterPartProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadRoundCenterPart;
export { AvatarHeadRoundCenterPart };
