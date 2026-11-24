import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadCurlyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadCurly: ForwardRefExoticComponent<AvatarHeadCurlyProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadCurly;
export { AvatarHeadCurly };
