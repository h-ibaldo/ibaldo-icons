import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadCurlyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadCurlyBob: ForwardRefExoticComponent<AvatarHeadCurlyBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadCurlyBob;
export { AvatarHeadCurlyBob };
