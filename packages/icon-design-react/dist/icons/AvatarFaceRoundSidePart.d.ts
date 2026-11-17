import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceRoundSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceRoundSidePart: ForwardRefExoticComponent<AvatarFaceRoundSidePartProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceRoundSidePart;
export { AvatarFaceRoundSidePart };
