import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadCurlyTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadCurlyTop: ForwardRefExoticComponent<AvatarHeadCurlyTopProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadCurlyTop;
export { AvatarHeadCurlyTop };
