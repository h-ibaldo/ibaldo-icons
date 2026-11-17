import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceTexturedPuffsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceTexturedPuffs: ForwardRefExoticComponent<AvatarFaceTexturedPuffsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceTexturedPuffs;
export { AvatarFaceTexturedPuffs };
