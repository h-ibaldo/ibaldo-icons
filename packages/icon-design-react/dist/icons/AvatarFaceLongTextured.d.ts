import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongTexturedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongTextured: ForwardRefExoticComponent<AvatarFaceLongTexturedProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongTextured;
export { AvatarFaceLongTextured };
