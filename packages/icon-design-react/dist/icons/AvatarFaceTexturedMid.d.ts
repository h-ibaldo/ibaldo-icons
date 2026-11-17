import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceTexturedMidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceTexturedMid: ForwardRefExoticComponent<AvatarFaceTexturedMidProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceTexturedMid;
export { AvatarFaceTexturedMid };
