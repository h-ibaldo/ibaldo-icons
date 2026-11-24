import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceTexturedShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceTexturedShort: ForwardRefExoticComponent<AvatarFaceTexturedShortProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceTexturedShort;
export { AvatarFaceTexturedShort };
