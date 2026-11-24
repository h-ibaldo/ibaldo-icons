import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceSpiky: ForwardRefExoticComponent<AvatarFaceSpikyProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceSpiky;
export { AvatarFaceSpiky };
