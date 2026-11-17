import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadShoulderCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadShoulderCenterPart: ForwardRefExoticComponent<AvatarHeadShoulderCenterPartProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadShoulderCenterPart;
export { AvatarHeadShoulderCenterPart };
