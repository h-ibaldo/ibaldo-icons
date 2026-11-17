import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongSideSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongSideSwept: ForwardRefExoticComponent<AvatarFaceLongSideSweptProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongSideSwept;
export { AvatarFaceLongSideSwept };
