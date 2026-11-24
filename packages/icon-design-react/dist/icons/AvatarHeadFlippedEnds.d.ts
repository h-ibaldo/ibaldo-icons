import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadFlippedEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadFlippedEnds: ForwardRefExoticComponent<AvatarHeadFlippedEndsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadFlippedEnds;
export { AvatarHeadFlippedEnds };
