import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSideBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSideBangs: ForwardRefExoticComponent<AvatarHeadSideBangsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSideBangs;
export { AvatarHeadSideBangs };
