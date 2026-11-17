import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceLongBraidsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceLongBraids: ForwardRefExoticComponent<AvatarFaceLongBraidsProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceLongBraids;
export { AvatarFaceLongBraids };
