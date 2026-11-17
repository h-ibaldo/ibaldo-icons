import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadTexturedMidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadTexturedMid: ForwardRefExoticComponent<AvatarHeadTexturedMidProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadTexturedMid;
export { AvatarHeadTexturedMid };
