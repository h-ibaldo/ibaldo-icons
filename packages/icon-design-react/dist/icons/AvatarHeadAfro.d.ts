import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadAfroProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadAfro: ForwardRefExoticComponent<AvatarHeadAfroProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadAfro;
export { AvatarHeadAfro };
