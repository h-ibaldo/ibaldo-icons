import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadShoulderSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadShoulderSidePart: ForwardRefExoticComponent<AvatarHeadShoulderSidePartProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadShoulderSidePart;
export { AvatarHeadShoulderSidePart };
