import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongSidePart: ForwardRefExoticComponent<AvatarFaceLongSidePartProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongSidePart;
export { AvatarFaceLongSidePart };
