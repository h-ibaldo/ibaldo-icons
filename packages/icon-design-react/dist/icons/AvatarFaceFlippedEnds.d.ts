import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceFlippedEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceFlippedEnds: ForwardRefExoticComponent<AvatarFaceFlippedEndsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceFlippedEnds;
export { AvatarFaceFlippedEnds };
