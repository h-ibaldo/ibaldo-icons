import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadSwoopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadSwoop: ForwardRefExoticComponent<AvatarHeadSwoopProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadSwoop;
export { AvatarHeadSwoop };
