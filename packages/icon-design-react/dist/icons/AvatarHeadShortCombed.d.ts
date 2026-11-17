import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadShortCombedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadShortCombed: ForwardRefExoticComponent<AvatarHeadShortCombedProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadShortCombed;
export { AvatarHeadShortCombed };
