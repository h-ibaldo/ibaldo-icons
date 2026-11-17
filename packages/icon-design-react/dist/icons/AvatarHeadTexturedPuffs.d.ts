import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadTexturedPuffsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadTexturedPuffs: ForwardRefExoticComponent<AvatarHeadTexturedPuffsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadTexturedPuffs;
export { AvatarHeadTexturedPuffs };
