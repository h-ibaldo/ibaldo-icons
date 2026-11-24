import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSideSweptShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSideSweptShort: ForwardRefExoticComponent<AvatarFaceSideSweptShortProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSideSweptShort;
export { AvatarFaceSideSweptShort };
