import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadBobBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadBobBangs: ForwardRefExoticComponent<AvatarHeadBobBangsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadBobBangs;
export { AvatarHeadBobBangs };
