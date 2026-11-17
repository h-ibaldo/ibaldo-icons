import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSpaceBunsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSpaceBuns: ForwardRefExoticComponent<AvatarFaceSpaceBunsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSpaceBuns;
export { AvatarFaceSpaceBuns };
