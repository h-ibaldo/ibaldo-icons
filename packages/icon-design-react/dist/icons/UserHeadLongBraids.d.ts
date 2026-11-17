import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadLongBraidsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadLongBraids: ForwardRefExoticComponent<UserHeadLongBraidsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadLongBraids;
export { UserHeadLongBraids };
