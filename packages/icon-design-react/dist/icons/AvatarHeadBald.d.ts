import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadBaldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadBald: ForwardRefExoticComponent<AvatarHeadBaldProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadBald;
export { AvatarHeadBald };
