import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadMohawkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadMohawk: ForwardRefExoticComponent<AvatarHeadMohawkProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadMohawk;
export { AvatarHeadMohawk };
