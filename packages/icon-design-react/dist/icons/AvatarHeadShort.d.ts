import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadShort: ForwardRefExoticComponent<AvatarHeadShortProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadShort;
export { AvatarHeadShort };
