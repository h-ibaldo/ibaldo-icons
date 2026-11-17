import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSidePartBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSidePartBob: ForwardRefExoticComponent<AvatarHeadSidePartBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSidePartBob;
export { AvatarHeadSidePartBob };
