import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadLongBraidsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadLongBraids: ForwardRefExoticComponent<AvatarHeadLongBraidsProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadLongBraids;
export { AvatarHeadLongBraids };
