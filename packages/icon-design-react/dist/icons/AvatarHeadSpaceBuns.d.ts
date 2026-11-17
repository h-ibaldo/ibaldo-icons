import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSpaceBunsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSpaceBuns: ForwardRefExoticComponent<AvatarHeadSpaceBunsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSpaceBuns;
export { AvatarHeadSpaceBuns };
