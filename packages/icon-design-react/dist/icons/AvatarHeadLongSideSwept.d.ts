import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadLongSideSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadLongSideSwept: ForwardRefExoticComponent<AvatarHeadLongSideSweptProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadLongSideSwept;
export { AvatarHeadLongSideSwept };
