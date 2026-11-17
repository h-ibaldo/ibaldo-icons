import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadTexturedShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadTexturedShort: ForwardRefExoticComponent<AvatarHeadTexturedShortProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadTexturedShort;
export { AvatarHeadTexturedShort };
