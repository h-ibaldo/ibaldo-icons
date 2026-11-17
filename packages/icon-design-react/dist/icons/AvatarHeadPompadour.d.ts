import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadPompadourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadPompadour: ForwardRefExoticComponent<AvatarHeadPompadourProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadPompadour;
export { AvatarHeadPompadour };
